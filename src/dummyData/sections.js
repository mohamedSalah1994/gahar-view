const dummyData = {
    sections: [
      {
        pageName: "level 4",
        imageUrl: "https://gahar.gov.eg/upload/logo-final-500x500.png",
        section: {
          pageSectionId: 50,
          pageSectionName: "dsadasdasdasdasdassadas",
          pageSectionSort: 1,
          pageSectionUrl: "",
          pagesId: 1,
          sectionTypesId: 2,
          pages: null,
        },
      },
      {
        pageName: "level 4",
        imageUrl: "https://gahar.gov.eg/upload/logo-final-500x500.png",
        section: {
          pageSectionId: 51,
          pageSectionName: "خطوات واجراءات الحصول على اعتماد ",
          pageSectionSort: 2,
          pageSectionUrl: "",
          pagesId: 3,
          sectionTypesId: 1,
          pages: null,
        },
      },
      {
        pageName: "level 4",
        imageUrl: "https://gahar.gov.eg/upload/logo-final-500x500.png",
        section: {
          pageSectionId: 51,
          pageSectionName: "خطوات واجراءات الحصول على اعتماد ",
          pageSectionSort: 3,
          pageSectionUrl: "",
          pagesId: 1,
          sectionTypesId: 1,
          pages: null,
        },
      },
    ],
  };

/* export const dummySections = (id) => {
  return {
    sections: [
      dummyData.sections.find(
        (section) => section.section.pagesId === parseInt(id)
      ),
    ],
  };
}; */
export const dummySections = () => {
  return dummyData;
};
