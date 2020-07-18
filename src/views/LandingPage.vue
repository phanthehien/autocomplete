<template>
  <div class="landingPage">
    <nav>
      <span class="branding"> <logo /> </span>
      <div class="menu">
        <span class="menuItem"> 
          <toggle-button 
            :margin="-2"
            :value="darkMode" 
            :labels="true" 
            :color="{ checked: 'white', 'unchecked': 'dimgrey' }"
            :switchColor="{ checked: 'dimgrey', 'unchecked': 'white' }"
            class="toogleMode"
          >
            <template slot="checked">
              <li class="sunny"><night /></li>
            </template>
            <template slot="unchecked">
              <li class="dark"><sunny /></li>
            </template>
          </toggle-button>
        </span>
        <span class="menuItem">Become a host</span>
        <span class="menuItem">Help</span>
        <span class="menuItem">Sign up</span>
        <span class="menuItem">Log in</span>
      </div>
    </nav>
    <div class="form"> 
      <auto-complete />
    </div>
  </div>
</template>

<script>
import AutoComplete from '@/components/auto-complete';
import Logo from '@/assets/airbnb-logo.svg';
import Night from '@/assets/night-icon.svg';
import Sunny from '@/assets/sunny-icon.svg';

export default {
  name: 'LandingPage',
  components: {
    AutoComplete,
    Logo,
    Night,
    Sunny
  },
  data() {
    return {
      darkMode: true
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$font-color: white;

.landingPage {
  width: 100%;
  height: 100%;
  background: url('~@/assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 90px;
  
  span {
    margin: 5px;
  }

  .branding {
    width: 35px;
    height: auto;
    color: $font-color;
    margin: 0 30px;
  }

  .menu {
    font-weight: bold;
    color: $font-color;
    height: auto;
    display: flex;
    justify-items: center;
    align-items: center;
  }

  .menuItem {
    margin: 0 20px;
  }
}

.form {
  margin: 80px auto;
  width: 600px;
}

.toogleMode {
  li {
    list-style: none;
    color: $font-color;
    vertical-align: middle;
    padding-top: 3px;
    margin-right: -6px;

    svg {
      width: 16px;
      height: auto;
    }

    &.sunny {
      margin-left: -4px;
      padding-top: 4px;

      svg {
        width: 14px;
        height: auto;
      }
    }
  }

  
}
</style>
