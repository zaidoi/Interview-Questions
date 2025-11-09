body {
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
}

* {
  box-sizing: border-box;
}

header,
nav,
main,
aside,
footer {
  padding: 12px;
}

header {
  background-color: tomato;
  height: 60px;
  text-align:center;
  
}
.container{
  display:grid;
  grid-template-rows: 60px auto 100px;
  min-height:100vh;
}
.columns{
display: flex;
flex:1;
}

nav {
  background-color: coral;
  text-align:center;
  width: 100px;
  flex-shrink:0;
}

main {
  background-color: moccasin;
  text-align:center;
  flex-grow:1;
}

aside {
  background-color: sandybrown;
  text-align:center;
  flex-shrink: 0;
  width:100px
}

footer {
  background-color: slategray;
  height: 100px;
  text-align:center;
  position:sticky;
}
