<script>
export default {};
</script>

<template>
  <div :class="$style.dashTable">
    <h1>Title</h1>

    <table>
      <tr>
        <th>Name</th>
        <th>Host</th>
        <th>Deadline</th>
      </tr>
      <tr>
        <td>KLSTWOW</td>
        <td>Wachuuski</td>
        <td>Friday</td>
      </tr>
      <tr>
        <td>CaryTWOW</td>
        <td>CaryKH</td>
        <td>Who knows?</td>
      </tr>
    </table>
  </div>
</template>

<style lang="postcss" module>
.dashTable {
  text-align: center;
}

.dashTable h1 {
  font-family: 'Source Sans Pro', sans-serif;
}

table {
  border-collapse: collapse;
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
}

tr {
  height: 50px;
}

td,
th {
  border: 1px solid var(--tertiary);
  text-align: left;
  padding: 8px;
}

tr:nth-child(1) {
  background: var(--tertiary);
  color: var(--dark);
}

th {
  text-align: center;
  border-left: 2px solid var(--dark);
}

tr:nth-child(1) th:nth-child(1) {
  border-left: 1px solid var(--tertiary);
}
</style>
