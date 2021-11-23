# Sushiswap Widget

deploy:

```
yarn build
pm2 restart sushiswap
```

nginx:

```
location /sushiswap {
    proxy_pass http://localhost:3001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Port $server_port;
}

location /_next/image {
    proxy_pass http://localhost:3001;
}

location /_next/static {
    alias /home/ubuntu/Sushiswap/.next/static;
    expires 30d;
}
```
