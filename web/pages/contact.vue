<template>
  <div class="space-y-8">
    <div class="space-y-5 text-lg flex flex-col">
      <span class="text-3xl font-bold text-orange-600">Thông Tin Liên Hệ</span>
      <span class="text-xl text-orange-600">{{ info?.companyName }}</span>
      <span>
        Mã số thuế:
        <span class="text-orange-600">{{ info?.taxIN }}</span>
      </span>
      <span>Địa chỉ:
        <span class="text-orange-600">{{ info?.address }}</span>
      </span>
      <span>Hotline/Zalo:
        <span class="text-orange-600" v-for="(value, index) in info?.phoneNumbers">
          {{ value }}<span class="mx-2" v-if="index < info!.phoneNumbers!.length - 1">-</span>
        </span>
      </span>
      <span>Email:
        <span class="text-orange-600">{{ info?.email }}</span>
      </span>
    </div>
    <div class="border bg-gray-50 space-y-5 p-5">
      <span class="text-xl font-bold text-orange-600">Gửi Yêu Cầu Tư Vấn Miễn Phí</span>
      <p>Quý khách hàng hãy nhập thông tin bên dưới và gửi, chúng tôi sẽ phản hồi quý
        khách sớm nhất. Rất vui lòng khi nhận được ý kiến của quý khách!</p>
      <div class="flex gap-4">
        <div class="space-y-4">
          <input type="text" placeholder="Họ và tên*..." class="input w-full" />
          <input type="text" placeholder="Số điện thoại*..." class="input w-full" />
          <input type="text" placeholder="Địa chỉ*..." class="input w-full" />
        </div>
        <textarea class="textarea w-full" placeholder="Nội dung yêu cầu tư vấn..."></textarea>
      </div>
      <div class="italic">
        <p class="text-orange-600 font-medium">Lưu ý:</p>
        <p>Thông tin quý khách cung cấp càng đầy đủ thì chúng tôi càng có cơ sở để đưa ra phương án tối
          ưu hơn. Ví dụ: Xây nhà ở đâu? Diện tích đất bao nhiêu? Xây bao nhiêu tầng, công năng sử dụng các phòng thế
          nào?</p>
      </div>
      <div class="flex justify-end">
        <button class="btn bg-orange-500 text-white">Gửi yêu cầu</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Info = {
  companyName: string
  taxIN: string
  logUrl?: string | null
  phoneNumbers: string[]
  services: string[],
  address: string,
  email: string
}

const { data: info } = await useAsyncData(() => queryCollection("page").path('/info').first(), {
  transform(value) {
    return <Info>{
      ...value?.body
    }
  }
})
</script>

<style></style>