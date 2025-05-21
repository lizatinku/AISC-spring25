import fastf1
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_absolute_error

fastf1.Cache.enable_cache("f1_cache")

gp_rounds = {
    "Australia": 3,
    "Japan": 4,
    "Bahrain": 1
}

qualifying_2025 = pd.DataFrame({
    "Driver": ["Lando Norris", "Oscar Piastri", "Max Verstappen", "George Russell", "Yuki Tsunoda",
               "Alexander Albon", "Charles Leclerc", "Lewis Hamilton", "Pierre Gasly", "Carlos Sainz", "Fernando Alonso", "Lance Stroll",
               "Esteban Ocon", "Andrea Kimi Antonelli", "Oliver Bearman"],
    "QualifyingTime (s)": [75.096, 75.180, 75.481, 75.546, 75.670,
                           75.737, 75.755, 75.973, 75.980, 76.062, 76.4, 76.5,
                           76.200, 76.500, 76.650]
})

driver_mapping = {
    "Lando Norris": "NOR", "Oscar Piastri": "PIA", "Max Verstappen": "VER", "George Russell": "RUS",
    "Yuki Tsunoda": "TSU", "Alexander Albon": "ALB", "Charles Leclerc": "LEC", "Lewis Hamilton": "HAM",
    "Pierre Gasly": "GAS", "Carlos Sainz": "SAI", "Lance Stroll": "STR", "Fernando Alonso": "ALO",
    "Esteban Ocon": "OCO", "Andrea Kimi Antonelli": "ANT", "Oliver Bearman": "BEA"
}

qualifying_2025["DriverCode"] = qualifying_2025["Driver"].map(driver_mapping)

def train_and_predict(gp_name):
    round_number = gp_rounds[gp_name]
    session = fastf1.get_session(2024, round_number, "R")
    session.load()

    laps = session.laps[["Driver", "LapTime"]].copy()
    laps.dropna(subset=["LapTime"], inplace=True)
    laps["LapTime (s)"] = laps["LapTime"].dt.total_seconds()

    merged_data = qualifying_2025.merge(laps, left_on="DriverCode", right_on="Driver")
    X = merged_data[["QualifyingTime (s)"]]
    y = merged_data["LapTime (s)"]

    if X.empty:
        return pd.DataFrame(), None

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=39)
    model = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1, random_state=39)
    model.fit(X_train, y_train)

    preds = model.predict(qualifying_2025[["QualifyingTime (s)"]])
    result = qualifying_2025.copy()
    result["Predicted Race Time (s)"] = preds
    result = result.sort_values(by="Predicted Race Time (s)").reset_index(drop=True)
    result["Position"] = result.index + 1

    mae = mean_absolute_error(y_test, model.predict(X_test))
    return result[["Position", "Driver", "Predicted Race Time (s)"]], mae

for gp in ["Australia", "Japan", "Bahrain"]:
    leaderboard, mae = train_and_predict(gp)
    if not leaderboard.empty:
        print(f"\n 2025 {gp} GP Predicted Leaderboard \U0001F3C1")
        print(leaderboard)
        print(f"\U0001F50D Model Error (MAE): {mae:.2f} seconds\n")
    else:
        print(f"\u26A0\uFE0F No data available for {gp}")
