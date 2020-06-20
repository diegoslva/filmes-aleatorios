<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #130b1a;
  color: white;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  width: 100%;
  padding-right: 55px;
  padding-left: 55px;
  margin-right: auto;
  margin-left: auto;
}

.btn-primary {
  border-radius: 100px;
  border: 0;
  padding: 0 20px;
  height: 53px;
  width: 270px;
  font-size: 15px;
  font-weight: 700;
  display: block;
  background-color: #e0086a;
  color: honeydew;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0px;
  box-shadow: 1px 0px 27px -6px #e0086a;
  cursor: pointer;
  margin-top: 20px;
  line-height: 40px;
  font-size: 14px;
  display: block;
}
</style>
