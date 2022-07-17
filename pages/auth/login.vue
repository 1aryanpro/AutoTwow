<script>

    export default {
        middleware({ redirect, env }) {
            let params = new URLSearchParams({
                client_id: '976595499060690974',
                redirect_uri: `${env.HOSTNAME}:${env.PORT}/auth/callback`,
                response_type: 'code',
                scope: 'identify email'
            });
            redirect(`https://discord.com/api/oauth2/authorize?${params.toString()}`);
        } 
    }
</script>