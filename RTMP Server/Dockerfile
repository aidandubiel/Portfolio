# grabs a pre-built docker image specifically for rtmp streaming. 
FROM tiangolo/nginx-rtmp 


# copies the config and html files from the server to the container. This runs each time you use the 'docker compose build' command. 
COPY ./configs/nginx.conf /etc/nginx/nginx.conf
COPY ./html/index.html /www/1883f28c483d4ca3640ee673a954ae48/index.html
