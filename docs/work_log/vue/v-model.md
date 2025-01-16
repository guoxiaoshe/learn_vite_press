在Vue 2中，`v-model` 是一个语法糖，它本质上是一个传递了名为 `value` 的 prop 并接收名为 `input` 的事件的组件。要让自定义组件支持 `v-model`，你需要做以下几步：
1. 在自定义组件内部定义一个名为 `value` 的 prop。
2. 当组件内部的数据变化时，触发一个名为 `input` 的事件，并将新的值作为事件的参数传递出去。
下面是一个简单的自定义组件，它支持 `v-model`：
```vue
<template>
  <div>
    <!-- 组件的输入框，绑定输入事件为updateValue -->
    <input type="text" :value="value" @input="updateValue">
  </div>
</template>
<script>
export default {
  props: {
    // 定义value prop，这是v-model的默认prop
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 当输入框的值发生变化时，触发这个方法
    updateValue(event) {
      // 触发input事件，并传递新值，这是v-model的默认事件
      this.$emit('input', event.target.value);
    }
  }
}
</script>
```
在父组件中使用这个自定义组件，并绑定 `v-model`：
```vue
<template>
  <div>
    <!-- 使用v-model绑定数据 -->
    <my-custom-input v-model="myData"></my-custom-input>
  </div>
</template>
<script>
import MyCustomInput from './MyCustomInput.vue';
export default {
  components: {
    MyCustomInput
  },
  data() {
    return {
      myData: '初始值'
    }
  }
}
</script>
```
在这个例子中，`my-custom-input` 组件内部的输入框的值会与父组件的 `myData` 数据双向绑定。当输入框的值改变时，`updateValue` 方法会被调用，并通过 `$emit` 触发 `input` 事件，将新的值传递给父组件，从而更新 `myData` 的值。
如果你想要自定义 `v-model` 的事件名和 prop 名，你可以使用 `model` 选项：
```vue
<script>
export default {
  model: {
    prop: 'customValue', // 默认是 'value'
    event: 'customInput' // 默认是 'input'
  },
  props: {
    customValue: String
  },
  methods: {
    updateValue(event) {
      this.$emit('customInput', event.target.value);
    }
  }
}
</script>
```
这样，你的组件就可以使用 `v-model` 指令，但是绑定的是 `customValue` prop 和监听 `customInput` 事件。
