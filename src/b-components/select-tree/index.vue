<!-- 选择下拉树 -->
<template>
  <div class="select-tree">
    <Select v-model="selectValue" v-bind="$attrs" v-on="$listeners" transfer style="width:400px">
      <Option value="下拉值" v-show="false">下拉项</Option>
      <Tree :data="treeData" v-bind="$attrs" v-on="$listeners"></Tree>
    </Select>
  </div>
</template>

<script>
import { Select, Tree} from 'view-design'
export default {
  name: 'selectTree',
  components: { Select, Tree },
  data() {
    return {
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
      ],
      selectValue: '',
      treeData: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.select-tree {
  .ivu-tree{
    text-align: left;
    padding: 0 6px;
  }
}
</style>
