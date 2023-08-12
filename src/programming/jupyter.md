# Jupyter

Setting up a single-user jupyter notebook server.

1. Create and activate a virtualenv on the server:
   `python3 -m venv jupyter && . jupyter/bin/activate`
2. Install jupyter.
   `pip3 install jupyter`
3. Setup for creating a [public server](https://jupyter-server.readthedocs.io/en/latest/operators/public-server.html).
   `jupyter notebook --generate-config`
4. Set the password for the notebook:
   `jupyter notebook --generate-config`
5. Modify the port to be something specific. Put all the configuration in the `~/.jupyter/jupyter_notebook_config.json` file.
   In `~/.jupyter/jupyter_notebook_config.json`:
      `"port": 9999`
6. Setup nginx to forward to that port:
   ```txt
   server {
     listen         80;
     server_name    $SERVER_NAME;
   
     location       '/.well-known/' {
       default_type "text/plain";
       root         /usr/local/var/www/letsencrypt;
     }
   
     location / {
       return              301 https://$server_name$request_uri;
     }
   }
   
   server {
     listen 443 ssl;
   
     server_name $SERVER_NAME;
   
     ssl on;
     ssl_certificate /etc/letsencrypt/live/$SERVER_NAME/fullchain.pem;
     ssl_certificate_key /etc/letsencrypt/live/$SERVER_NAME/privkey.pem;
   
     ssl_session_timeout 5m;
     ssl_dhparam /usr/local/etc/nginx/dhparam.pem;
   
     add_header Strict-Transport-Security "max-age=31536000; includeSubdomains;";
   
     location / {
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header Host $http_host;
         proxy_pass http://$HOST_IP:$HOST_PORT;
         proxy_redirect http:// https://;
     }
     location ~ /api/kernels/ {
         proxy_pass http://$HOST_IP:$HOST_PORT;
         proxy_set_header      Host $host;
         # websocket support
         proxy_http_version    1.1;
         proxy_set_header      Upgrade "websocket";
         proxy_set_header      Connection "Upgrade";
         proxy_read_timeout    86400;
     }
     location ~ /terminals/ {
         proxy_pass http://$HOST_IP:$HOST_PORT;
         proxy_set_header      Host $host;
         # websocket support
         proxy_http_version    1.1;
         proxy_set_header      Upgrade "websocket";
         proxy_set_header      Connection "Upgrade";
         proxy_read_timeout    86400;
     }
   }
   ```
7. Setup letsencrypt:
   ```txt
   domains = $SERVER_NAME

   rsa-key-size = 4096
   server = https://acme-v01.api.letsencrypt.org/directory
   
   email = $EMAIL
   
   text = True
   
   authenticator = webroot
   webroot-path = /usr/local/var/www/letsencrypt
   ```
8. Configure DNS to direct `$SERVER_NAME` to your machine.
9. Restart nginx
10. Run certbot
   `sudo certbot certonly -c /path/to/letsencrypt/config`
11. Set it up to automatically run.

## OSX

On OSX, we're going to set this up as a LaunchAgent, so in ~/Library/LaunchAgents, add:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>com.younata.jupyter</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <false/>
    <key>ProgramArguments</key>
    <array>
        <string>/path/to/virtualenv/bin/jupyter</string>
        <string>notebook</string>
        <string>--config=$HOME/.jupyter/jupyter_notebook_config.json</string>
    </array>
    <key>WorkingDirectory</key>
    <string>$HOME</string>
  </dict>
</plist>
```

Note that `$HOME` should be expanded to your home directory, not included in the plist.
