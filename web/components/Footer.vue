<template>
  <div>
    <div class="bg-stone-600">
      <footer
        class="w-2/3 mx-auto flex justify-between footer sm:footer-horizontal text-base-content text-gray-200 p-10">
        <nav>
          <h6 class="footer-title">Dịch vụ của chúng tôi</h6>
          <a class="link link-hover">Thi công xây dựng</a>
          <a class="link link-hover">Tư vấn thiết kế</a>
          <a class="link link-hover">Quản lý dự án</a>
          <a class="link link-hover">Xây dựng dân dụng</a>
          <a class="link link-hover">Thi công hoàn thiện</a>
        </nav>
        <nav>
          <h6 class="footer-title">Hiratech</h6>
          <a class="link link-hover">Về chúng tôi</a>
          <a class="link link-hover">Liên hệ</a>
          <a class="link link-hover">Dự án</a>
          <a class="link link-hover">Báo giá</a>
        </nav>
        <!-- <nav>
          <h6 class="footer-title">Legal</h6>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </nav> -->
        <form>
          <h6 class="footer-title">Liên hệ nhanh</h6>
          <fieldset class="w-80 space-y-3">
            <label>Nhập vào số điện thoại hoặc email của bạn, chúng tôi sẽ chủ động liên hệ lại ngay.</label>
            <div class="join">
              <input type="text" placeholder="username@gmail.com" class="input input-bordered join-item" />
              <button class="btn btn-primary join-item">Gửi yêu cầu</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
    <footer class="footer sm:footer-horizontal footer-center bg-stone-700 text-base-content text-gray-300 p-4">
      <aside>
        <p>Copyright © {{ new Date().getFullYear() }} – All rights reserved by HIRACTECH Trading & Construction Co.,
          Ltd.</p>
      </aside>
    </footer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>