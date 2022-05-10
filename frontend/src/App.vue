<template>
  <div id="app">
    <div class="bg-[#875D53] h-full container mx-auto my-5 grid grid-cols-3 gap-4">
      <div class="">
      <span>ค้นหา 'คณะ'</span>
      <multiselect 
        v-model="value" 
        tag-placeholder="Add this as new tag" placeholder="Search or add a tag" 
        :options="faculity" :multiple="true" 
        :taggable="true" @tag="addTag"
        :close-on-select="false">
      </multiselect>
      </div>
      <div class="">
      <span>ค้นหา 'รอบรับสมัคร'</span>
      <multiselect 
        v-model="value" 
        tag-placeholder="Add this as new tag" placeholder="Search or add a tag" 
        :options="round" :multiple="true" 
        :taggable="true" @tag="addTag"
        :close-on-select="false">
      </multiselect>
      </div>
      <div class="">
      <span>ค้นหา 'โครงการ'</span>
      <multiselect 
        v-model="value" 
        tag-placeholder="Add this as new tag" placeholder="Search or add a tag" 
        :options="projects" :multiple="true" 
        :taggable="true" @tag="addTag"
        :close-on-select="false">
      </multiselect>
      </div>
      <div class="">
      <span>ค้นหาหลักสูตร ไทย / นานาชาติ</span>
      <multiselect 
        v-model="value" 
        tag-placeholder="Add this as new tag" placeholder="Search or add a tag" 
        :options="course" :multiple="true" 
        :taggable="true" @tag="addTag"
        :close-on-select="false">
      </multiselect>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import axios from 'axios'

export default {
  name: "App",
  components: { Multiselect },
  data() {
    return {
      value: null,
      faculity: [],
      round: [],
      projects: [],
      course: [],
      all: [],
      count: 0
    };
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    getData(){
      axios.get('http://localhost:3001/getSelection')
      .then(response => {
        this.faculity = response.data[0].faculity
        this.round = response.data[0].round
        this.projects = response.data[0].project
        this.course = response.data[0].course
      })
    },
    getProject(){
      axios.get('http://localhost:3001/getResult')
      .then(response => {
        this.all = response.data
        this.count = this.all.length
        console.log(response.data)
      })
    }
  },
  created() {
    this.getData()
    this.getProject()
  }
};
</script>

<style>
 @import url("https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css");
</style>
