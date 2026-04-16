# presentator

It will present all the things what you given input.

## Terminal startup

Start everything from a terminal:

```powershell
powershell -ExecutionPolicy Bypass -File .\start-all-terminal.ps1
```

Check all server health endpoints:

```powershell
powershell -ExecutionPolicy Bypass -File .\check-servers.ps1
```

App URL:

```text
http://127.0.0.1:8080/
```

## Important note for Termux / mobile terminal

This project can be controlled from a terminal, but the full app stack still runs on the Windows machine because:

- `speech-server.ps1` uses Windows `System.Speech`
- `transcribe-server.ps1` uses Windows speech recognition
- the launch flow is PowerShell-based

So the safe setup is:

1. Keep the project on the Windows laptop
2. Start it from Windows PowerShell
3. Use your mobile terminal only to connect to that machine if you want remote control
