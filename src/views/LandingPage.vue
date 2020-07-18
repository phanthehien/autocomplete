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
      <auto-complete :search="handleFilter"/>
    </div>
  </div>
</template>

<script>
import AutoComplete from '@/components/auto-complete';
import Logo from '@/assets/airbnb-logo.svg';
import Night from '@/assets/night-icon.svg';
import Sunny from '@/assets/sunny-icon.svg';

const countries = ['Afghanistan','Albania','Algeria','Andorra','Angola','Anguilla','Antigua &amp; Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia &amp; Herzegovina','Botswana','Brazil','British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Central Arfrican Republic','Chad','Chile','China','Colombia','Congo','Cook Islands','Costa Rica','Cote D Ivoire','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Polynesia','French West Indies','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauro','Nepal','Netherlands','Netherlands Antilles','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','North Korea','Norway','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Puerto Rico','Qatar','Reunion','Romania','Russia','Rwanda','Saint Pierre &amp; Miquelon','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','St Kitts &amp; Nevis','St Lucia','St Vincent','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor L\'Este','Togo','Tonga','Trinidad &amp; Tobago','Tunisia','Turkey','Turkmenistan','Turks &amp; Caicos','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States of America','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Virgin Islands (US)','Yemen','Zambia','Zimbabwe'];

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
      darkMode: false
    }
  },
  methods: {
    handleFilter(input) {
      console.log(input);
      if (input.length < 1) { 
        return [] 
      }

      return countries.filter(country => {
        return country
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0;
      });
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
