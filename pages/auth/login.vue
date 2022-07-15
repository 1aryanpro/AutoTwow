<script>
    export default {
        middleware({ redirect }) {
            redirect('https://discord.com/api/oauth2/authorize?client_id=976595499060690974&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fcallback&response_type=code&scope=identify%20email');
        } 
    }
</script>