<template>
  <div>
    <div class="container">

        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">ค้นหา 'คณะ'</label>
              <div class="control">
                <div class="select" style="width:100%">
                  <select style="width:100%" >
                    <option v-for="(item,i) in faculity" :key="i">{{item}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <label class="label">ค้นหา 'รอบรับสมัคร'</label>
              <div class="control">
                <div class="select" style="width:100%">
                  <select style="width:100%">
                    <option v-for="(item,i) in round" :key="i">{{item}}></option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">ค้นหา 'โครงการ'</label>
              <div class="control">
                <div class="select" style="width:100%">
                  <select style="width:100%">
                    <option v-for="(item,i) in projects" :key="i">{{item}}>Select dropdown</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <label class="label">ค้นหาหลักสูตร ไทย / นานาชาติ</label>
              <div class="control">
                <div class="select" style="width:100%">
                  <select style="width:100%">
                    <option v-for="(item,i) in course" :key="i">{{item}}></option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">คำค้นหาเพิ่มเติม (Enter เพื่อแยกคำ) [ระบบจะค้นจากชื่อคณะ,หลักสูตร]</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input">
          </div>
        </div>
        <button class="button is-link" @click="addData">Click</button>

        <p>ทั้งหมด : {{count}} ผลลัพท์</p>
        <div>
          <article class="message mt-3" v-for="(item,i) in all" :key="i">
            <div class="message-header">
              <p>{{ item.CURRICULUM_FULL_NAME_TH }}<br/>แผนการเรียน: {{ item.STUDY_PLAN_NAME_TH }} | ช่วงเวลาเรียน: {{item.STUDY_CLASSES_NAME_TH}} || เฉพาะ:  {{item.SPECIFIC_NATION_NAME_TH}}</p>
            </div>
            <div class="message-body">
              คณะ: {{item.FACULTY_NAME_TH}}<br/>
              หลักสูตร: {{item.CURRICULUM_FULL_NAME_TH}}<br/>
              วันที่รับสมัคร: {{item.START_APPLICATION_DATE}} - {{item.END_APPLICATION_DATE}}<br/>
            </div>
            <div class="columns">
              <div class="column">
                  <button class="button is-link">สมัคร</button>
              </div>
              <div class="column">
                  <button class="button is-link">ประกาศรับสมัคร</button>
              </div>
              <div class="column">
                  <button class="button is-link">คุณสมบัติ</button>
              </div>
            </div>
          </article>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
     faculity: [],
     round: [],
     projects: [],
     course: [],
     all: [],
     count: 0
    }
  },
  methods: {
    getData(){
      axios.get('http://localhost:3000/findall')
      .then(response => {
        this.faculity = response.data[0].faculity
        this.round = response.data[0].round
        this.projects = response.data[0].project
        this.course = response.data[0].course
      })
    },
    getProject(){
      axios.get('http://localhost:3000/findproject')
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
}
</script>

<style>

</style>