import pyautogui
import pydirectinput
import time

from pynput.keyboard import Key, Controller
from datetime import datetime

keyboard = Controller()

print("AUTOCLICKER STARTING...")
time.sleep(2)

x, y = 0,0
keys = ["w","a","left","s","d","right"]

try:
  while True:
    for key in keys:
      x, y = pyautogui.position()
      pyautogui.click()
      pydirectinput.keyDown(key)
      time.sleep(0.5)
      pydirectinput.keyUp(key)
      now = datetime.now().strftime("%Y-%m-%d %H:%M:%wdSs") 

      position_str = f"X: {x} Y: {y}"
      
      print(f"Pressed: {key} , " + position_str, end="\r")
      pyautogui.moveRel(-20, -20)
      time.sleep(1)
      pyautogui.moveRel(20,20)
      

except KeyboardInterrupt:
  print("\nAutoclicker stopped.");