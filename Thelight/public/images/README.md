This folder should contain the site's static images copied from the repository root `images/`.

Please run the following command from the repository root to copy the images locally:

```bash
# from repository root
mkdir -p Thelight/public/images && cp -r images/* Thelight/public/images/
# on Windows (PowerShell)
mkdir -Force Thelight/public/images; Copy-Item -Path images\* -Destination Thelight/public/images -Recurse
```

I created the folder and placeholder README so you can run the copy command locally; binary image files were not copied by the agent.