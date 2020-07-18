<template>
  <div class="container">
    <span class="autocomplete">
      <span class="autocomplete-icon">
        <search-icon :style="{ width: '26px', height: '26px' }" />
      </span>
      <input
        class="autocomplete-input"
        v-model="value"
        placeholder="Try Vietnam"
        @keydown="handleKeyDown"
        @focus="handleFocus"
        aria-label=""
      >
    </span>
    <ul class="autocomplete-result">
      <li
        :key="`${item}_${index}`"
        v-for="(item, index) in results"
        class="autocomplete-resultItem"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="js">
import SearchIcon from '@/assets/search-icon.svg';

export default {
  name: 'AutoComplete',
  props: {
    search: {
      type: Function
    }
  },
  components: {
    SearchIcon
  },
  data() {
    return {
      darkMode: true,
      results: [],
      selectedIndex: -1,
      value: null
    }
  },
  watch: {
    value: function(val) {
      this.updateResults(val);
    },
  },
  methods: {
    handleFocus(event) {
      const { value } = event.target
      this.updateResults(value)
      this.value = value
    },

    handleKeyDown(event) {
      const { key } = event
      console.log('value: ', event.target.value);

      switch (key) {
        case 'Enter': {
          this.selectResult(this.value);
          break
        }
        case 'Esc': // IE/Edge
        case 'Escape': {
          this.hideResults();
          break
        }
        default:
          return
      }
    },

    selectResult() {
      const selectedResult = this.results[this.selectedIndex];
      if (selectedResult) {
        this.setValue(selectedResult)
      }
      this.hideResults()
    },

    hideResults () {
      this.selectedIndex = -1;
      this.results = [];
    },

    updateResults(value) {
      this.results = this.search(value);
      console.log('results', this.results);

      if (this.results.length === 0) {
        this.hideResults();
        return;
      }
    }
  }
}
</script>

<style scoped lang="scss">

$icon-color: #484848;
$result-backgroundColor: transparent;

.autocomplete {
  display: flex;
  position: relative;
  height: 60px;
  
  * {
    font-family: 'Roboto', sans-serif;
  }

  &-icon {
    position: absolute;
    z-index: 1;
    top: 16px;
    left: 18px;
    color: $icon-color;

    svg {
      width: 26px;
      height: 26px;
    }
  }

  &-input {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: rgba(72, 72, 72, 0.7);

    border: 1px solid #eee;
    border-radius: 8px;
    width: 100%;
    padding: 12px 12px 12px 60px;
    box-sizing: border-box;
    position: relative;
    font-size: 16px;
    line-height: 1.5;
    flex: 1;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: 12px center;

    &:focus, [aria-expanded="true"] {
      border-color: rgba(0, 0, 0, 0.12);
      background-color: #F8F8F8;
      outline: none;
      border-radius: 8px 8px 0 0;
    }
  }

  &-result {
    cursor: default;
    margin: 0;
    padding: 0px;
    background-repeat: no-repeat;
    background-position: 12px center;
    background-color: $result-backgroundColor;
    border-radius: 0 0 4px 4px;
    border: 0px solid white;
    border-top: 0px;

    &:hover {
      box-shadow: 0 0px 0px rgba(0, 0, 0, 0.16);
    }
  }

  &-resultItem {
    background-color: white;
    padding: 15px 20px 15px 20px;
    list-style: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    &:hover {
      background-color: #484848;
      cursor: pointer;
      color: white;
    }
  }
}

@keyframes rotate {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(359deg);
  }
}
</style>