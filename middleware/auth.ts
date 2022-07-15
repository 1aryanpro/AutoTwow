import { Middleware } from '@nuxt/types';
import { request } from 'https';

const middleware : Middleware = function(ctx){
    return new Promise((resolve, reject) => {
        if(!ctx.route.query.code) ctx.redirect('/');

        /* I really want to do it this way but CORS is forcing me to do it the other way.
            Also this is like ridiculously insecure lmao. We probably should not be doing it either of these ways.
            But it'll do for now.
        ctx.$axios.$post('https://discord.com/api/oauth/token', {
            client_id:'976595499060690974',
            client_secret: ctx.env.DISCORD_SECRET,
            redirect_uri:'http://localhost:3000/auth/callback',
            grant_type: 'authorization_code',
            code: ctx.route.query.code
        }).then(data => {
            let parsedData = JSON.parse(new TextDecoder().decode(data));
            console.log(parsedData, data);
            
            ctx.$axios.$get("https://discord.com/api/users/@me", {
                headers: {
                    authorization: `${parsedData.token_type} ${parsedData.access_token}`
                }
            }).then(userData => {
                ctx.store.commit('setUser', userData);
                ctx.redirect('/testLogin');    
            })
        });
        */

        // @ts-ignore: Unlisted Params
        let body = new URLSearchParams({
            client_id:'976595499060690974',
            client_secret: ctx.env.DISCORD_SECRET,
            redirect_uri:'http://localhost:3000/auth/callback',
            grant_type: 'authorization_code',
            code: ctx.route.query.code
        });

        let req = request({
            hostname: `discord.com`,
            path: '/api/oauth2/token',
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': body.toString().length
            }
        }, res => {
            res.on('data', data => {
                let parsedData = JSON.parse(new TextDecoder().decode(data));
                console.log(parsedData, data);
                
                ctx.$axios.$get("https://discord.com/api/users/@me", {
                    headers: {
                        authorization: `${parsedData.token_type} ${parsedData.access_token}`
                    }
                }).then(userData => {
                    ctx.store.commit('setUser', userData);
                    ctx.redirect('/testLogin');    
                })
            });

            res.on('error', error => {
                console.log(error);
                ctx.redirect('/');
            })
        });
            
        req.write(body.toString());
        req.end();
    });
}

export default middleware;