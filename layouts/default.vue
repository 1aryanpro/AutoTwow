<script>
export default {};
</script>

<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Roboto&family=Source+Sans+Pro:wght@700&display=swap');

:root {
  --dark: #323031;
  --light: #e5e5e5;

  --primary: #177e89;
  --primaryDark: #084c61;
  --secondary: #db3a34;
  --tertiary: #ffc857;
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--dark);
  font-family: 'Roboto', sans-serif;
  color: var(--light);
}
</style>
