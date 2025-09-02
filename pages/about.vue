<script setup>
definePageMeta({
  layout: "landing",
});

const TeamImg1 = "./darren.png";
const TeamImg2 =
  "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const team = [
  {
    name: "Darren Waack",
    title: "Owner/Manager",
    avatar: {
      src: TeamImg1,
      width: 480,
      height: 560,
    },
  },
  // {
  //   name: "Cassie Waack",
  //   title: "Owner/Admin Officer",
  //   avatar: {
  //     src: TeamImg2,
  //     width: 580,
  //     height: 580,
  //   },
  // },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>About</template>
      <template v-slot:desc>We are a small passionate team.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-Primary">
        Empowering small business and home offices to achieve their goals.
      </h2>
      <p class="text-lg leading-relaxed text-PrimaryLight">
        We're a small team! We come from diverse backgrounds, bringing different
        personalities, experiences and skills to the job. This is what makes our
        team so special.
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" class="group">
        <div class="w-full aspect-square">
          <img
            :src="item.avatar.src"
            :width="item.avatar.width"
            :height="item.avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-Primary">{{ item.name }}</h2>
          <h3 class="text-sm text-PrimaryLight">{{ item.title }}</h3>
        </div>
      </div>
      <!-- {
        team.map((item) => (
          <div class="group">
            <div class="w-full aspect-square">
              <Image
                {...item.avatar}
                format="avif"
                alt="Team"
                class="w-full h-full object-cover rounded transition  group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-gray-800"> {item.name}</h2>
              <h3 class="text-sm text-slate-500"> {item.title}</h3>
            </div>
          </div>
        ))
      } -->
    </div>
  </LandingContainer>
</template>
