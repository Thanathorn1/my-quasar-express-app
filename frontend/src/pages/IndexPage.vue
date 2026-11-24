<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">
      Version Control + Docker Demo (Quasar)
    </div>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Git Workflow (ตัวอย่างขั้นตอนทำงาน)</div>
        <q-list bordered separator class="q-mt-sm">
          <q-item v-for="(step, index) in gitSteps" :key="index">
            <q-item-section avatar>
              <q-badge>{{ index + 1 }}</q-badge>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ step.title }}</q-item-label>
              <q-item-label caption>{{ step.detail }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Docker Concepts (สรุปสั้น ๆ)</div>
        <q-list bordered separator class="q-mt-sm">
          <q-item v-for="(item, index) in dockerItems" :key="index">
            <q-item-section>
              <q-item-label>{{ item.title }}</q-item-label>
              <q-item-label caption>{{ item.detail }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-card>
      <q-card-section>
        <div class="text-h6">Docker Quick Reference</div>
        <q-list bordered separator class="q-mt-sm">
          <q-item v-for="(command, index) in dockerQuickReference" :key="index">
            <q-item-section>
              <q-item-label>
                <code>{{ command.command }}</code>
              </q-item-label>
              <q-item-label caption>{{ command.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
const gitSteps = [
  {
    title: 'แก้โค้ด Quasar ใน src/',
    detail: 'เพิ่มหน้า / component ใหม่ เช่น IndexPage.vue, Layout ต่าง ๆ',
  },
  {
    title: 'ตรวจสอบสถานะไฟล์',
    detail: 'ใช้คำสั่ง `git status` ดูว่าไฟล์ไหนเปลี่ยนแปลงบ้าง',
  },
  {
    title: 'เพิ่มไฟล์เข้า staging',
    detail: 'จากรากโปรเจกต์ ใช้ git add frontend/src/pages/IndexPage.vue',
  },
  {
    title: 'สร้าง commit พร้อมข้อความแบบ Conventional Commits',
    detail: 'เช่น `feat: add Git workflow demo page`',
  },
  {
    title: 'push ขึ้น GitHub',
    detail: 'ใช้ git push -u origin feature/quasar-demo แล้วเปิด Pull Request',
  },
]

const dockerItems = [
  {
    title: 'Image',
    detail: 'แพ็กเกจที่มีไฟล์และการตั้งค่าที่ใช้สร้าง container',
  },
  {
    title: 'Container',
    detail: 'อินสแตนซ์ที่สร้างจาก image เช่น container ที่รัน Nginx',
  },
  {
    title: 'Volume',
    detail: 'เก็บข้อมูลให้คงอยู่แยกจากวงจรชีวิตของ container',
  },
  {
    title: 'Network',
    detail: 'ให้บริการใน Docker ติดต่อกันได้',
  },
]

const dockerQuickReference = [
  {
    command: 'docker build -t my-quasar-frontend:latest -f frontend/Dockerfile ./frontend',
    description: 'สร้าง Docker image จากซอร์สโค้ด Quasar',
  },
  {
    command: 'docker run -d -p 8080:80 --name my-quasar-frontend-container my-quasar-frontend:latest',
    description: 'รัน container และเปิดหน้าเว็บผ่านพอร์ต 8080',
  },
  {
    command: 'docker compose up -d --build',
    description: 'สร้างและรันบริการ frontend ตามไฟล์ docker-compose.yml',
  },
  {
    command: 'docker compose ps',
    description: 'ตรวจดูสถานะบริการที่รันด้วย Docker Compose',
  },
]
</script>
