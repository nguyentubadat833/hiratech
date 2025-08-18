<template>
  <div class="space-y-8">
    <div class="md:space-y-5 space-y-2 text-lg flex flex-col">
      <span class="md:text-3xl text-2xl font-bold text-orange-600">Thông Tin Liên Hệ</span>
      <span v-for="row in getinfoToRow()" class="flex md:flex-row flex-col">
        <span class="w-32 inline-block">{{ row.label }}</span>
        <span class="text-orange-600">{{ row.value }}</span>
      </span>
    </div>
    <form class="border bg-gray-50 space-y-5 p-5">
      <span class="text-xl font-bold text-orange-600">Gửi Yêu Cầu Tư Vấn Miễn Phí</span>
      <p>Quý khách hàng hãy nhập thông tin bên dưới và gửi, chúng tôi sẽ phản hồi quý
        khách sớm nhất. Rất vui lòng khi nhận được ý kiến của quý khách!</p>
      <div class="md:flex space-y-4 md:space-y-0 gap-4">
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
    </form>
  </div>
</template>

<script lang="ts" setup>
interface Info {
  companyName: string
  taxIN: string
  logUrl?: string | null
  phoneNumbers: string[]
  services: string[],
  address: string,
  email: string
}


interface InfoRow {
  label: string,
  value: string
}


const { data: info } = await useAsyncData(() => queryCollection("page").path('/info').first(), {
  transform(value) {
    return <Info>{
      ...value?.body
    }
  }
})


const getinfoToRow = (): InfoRow[] => {
  return [
    {
      label: 'Công ty: ',
      value: info.value!.companyName
    }, {
      label: 'Mã số thuế: ',
      value: info.value!.taxIN
    }, {
      label: 'Địa chỉ: ',
      value: info.value!.address
    }, {
      label: 'Hotline/Zalo: ',
      value: info.value?.phoneNumbers
        ? info.value.phoneNumbers.join(" — ")
        : ""
    }, {
      label: 'Địa chỉ mail: ',
      value: info.value!.email
    }
  ]
}


</script>

<style></style>