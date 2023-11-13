<template>
  <AppHeader></AppHeader>

  <div dir="rtl">
    <main>
      <div class="row" style="padding: 10px">
        <div class="col-sm-3">
          <div
            class="card col-sm-2 col-lg-3 border-right-0"
            style="
              height: 425px;
              width: 300px;
              margin: 10px;
              background-color: white;
            "
          >
            <div style="background-color: #006174">
              <h5
                class="card-title text-white"
                style="background-color: #006174; padding: 10px; margin: 10px"
              >
                المركز الأعلامى
              </h5>
            </div>

            <ul class="list-group list-group-flush">
              <li
                class="list-group-item text-black"
                style="background-color: white"
              >
                <a
                  class="list-group-item list-group-item-action text-black"
                  style="font-weight: bold"
                  href="#"
                  ><i class="fa-solid fa-angle-left"></i> الأخبار
                </a>
              </li>
              <li
                class="list-group-item text-black"
                style="background-color: white"
              >
                <a
                  class="list-group-item list-group-item-action text-black"
                  style="font-weight: bold"
                  href="#"
                  ><i class="fa-solid fa-angle-left"></i>الفعاليات
                </a>
              </li>
              <li
                class="list-group-item text-black"
                style="background-color: white"
              >
                <a
                  class="list-group-item list-group-item-action text-black"
                  style="font-weight: bold"
                  href="#"
                  ><i class="fa-solid fa-angle-left"></i> أنشطة الفروع
                </a>
              </li>
              <li
                class="list-group-item text-black"
                style="background-color: white"
              >
                <a
                  class="list-group-item list-group-item-action text-black"
                  style="font-weight: bold"
                  href="#"
                  ><i class="fa-solid fa-angle-left"></i> الفيديوهات
                </a>
              </li>
              <li
                class="list-group-item text-black"
                style="background-color: white"
              >
                <a
                  class="list-group-item list-group-item-action text-black"
                  style="font-weight: bold"
                  href="#"
                  ><i class="fa-solid fa-angle-left"></i> معرض الصور
                </a>
              </li>
              <li
                class="list-group-item text-black"
                style="background-color: white"
              >
                <a
                  class="list-group-item list-group-item-action text-black"
                  style="font-weight: bold"
                  href="#"
                  ><i class="fa-solid fa-angle-left"></i> المؤتمرات</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-9">
          <div class="card">
            <div class="card-body">
              <div>
                <div class="row g-0">
                  <div v-if="pageData.imageURL" class="col-md-2">
                    <div>
                      <img
                        :src="pageData.imageURL"
                        class="img-fluid rounded-start text-white"
                        alt="..."
                      /><span class="text-white">
                        <br />
                      </span>
                    </div>
                  </div>

                  <div class="col-sm-10">
                    <div class="card text-black">
                      <div
                        class="card-body text-black"
                        style="white-space: pre-line"
                      >
                        <h3
                          class="text-black"
                          dir="rtl"
                          style="text-align: justify"
                        >
                          {{ pageData.pageName }}
                        </h3>

                        <!--  
                                                   <p class="text-black">{{ pageData.sectioncontent2 }}</p> -->
                        <div
                          v-for="section in pageData.sections"
                          :key="section?.pagesId"
                        >
                        <h4 v-if="section.sectionTypesId===1">{{ section?.pageSectionName  }}</h4>
                          <p v-if="section.sectionTypesId===2">{{ section?.pageSectionName }}</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
              <!--    <div class="d-grid gap-2 col-2 mx-auto">
                        <a href="/mediacenterphotos" class="btn  text-white" style="background-color: #006174;font-size:24px;" type="button">شاهد الصور  <i class="fa fa-folder" style="font-size:48px"></i></a>

                    </div> -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  
  <AppFooter></AppFooter>
</template>
<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { dummySections } from "../dummyData/sections";
import { useRoute } from "vue-router";
import { getPageByIdAPI } from "../apiServices";
import { ref, watchEffect } from "vue";
export default {
  components: {
    AppHeader,

    AppFooter,
  },

  setup() {
    /*    const pageData = ref({
            sectionheader1: "",
            sectioncontent2: "",
            sectionImage4: "",
            pageName: "",
            pageURL: "",
            pageId: ""
        }); */

    const pageData = ref({
      pageName: "",
      imageURL: "",
      sections: [],
    });
    const route = useRoute();

    const fetchPageData = async (id) => {
      try {
        let data;
        if (process.env.VUE_APP_ENVIROMENT === "PRODUCTION") {
          const response = await getPageByIdAPI(id);
          data = response.data;
        } else {
          data = dummySections();
        }
        pageData.value.pageName =
          data?.sections[0]?.pageName || "لا يوجد بيانات";
        pageData.value.imageURL = data?.sections[0]?.imageURL || null;
        pageData.value.sections = data?.sections
          ?.map((page) => page?.section)
          ?.sort((s1, s2) => s1?.pageSectionSort - s2?.pageSectionSort);
          
        /*   pageData.value.pageName = data?.sections[0]?.pageName || "لا يوجد بيانات"

                pageData.value.pageURL = data?.sections[0]?.imageURL || null

                const foundSection1 = data?.sections.find(sec => sec?.section?.sectionTypesId === 1)
                pageData.value.sectionheader1 = foundSection1?.section?.pageSectionName || "لا يوجد بيانات"
                

                const foundSection2 = data?.sections?.find(sec => sec?.section?.sectionTypesId === 2)
                pageData.value.sectioncontent2 = foundSection2?.section?.pageSectionName || "لا يوجد بيانات"

                const foundSection4 = data.sections.find(sec => sec?.section?.sectionTypesId === 4)
                pageData.value.sectionImage4 = foundSection4?.pageSectionUrl || null */
      } catch (err) {
        console.log(err);
      }
    };

    watchEffect(async () => {
      await fetchPageData(route.params.id);
    });

    // pageData.value.pageID = 1
    return {
      pageData,
    };
  },
};
</script>
