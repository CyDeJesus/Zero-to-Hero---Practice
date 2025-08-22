import pyautogui
import time 

from datetime import datetime

x, y = pyautogui.position();

print(f"Autoclicker started. It will click at ({x}, {y}) every 5 seconds.")
print("Press CTRL + C in this window to stop.\n")

try:
    while True:
        x, y = pyautogui.position(); # move mouse to the spot
        pyautogui.click()        # perform the click
        now = datetime.now().strftime("%Y-%m-%d %H:%M:%S") 
        print(f"[{now}] Clicked at ({x}, {y})")
        time.sleep(5)          # wait 300 seconds (5 minutes)
       
except KeyboardInterrupt:
    print("\nAutoclicker stopped.")
 
