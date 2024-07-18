export type I18nCode = keyof I18nSchema;

export interface I18nSchema {
  // ERROR BOUNDARY
  readonly ERROR_BOUNDARY_ERROR_HEADER: string;
  readonly TRY_AGAIN: string;

  //About
  readonly TITLE_MAIN_PAGE_TEXT: string;
  readonly TITLE_ABOUT_PAGE_ABOUT_TITLE: string;
  readonly TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE: string;
  readonly TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE1: string;
  readonly TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE2: string;
  readonly TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE3: string;
  readonly TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE4: string;
  readonly TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE5: string;
  readonly TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE6: string;
  readonly TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE7: string;
  readonly TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE8: string;

  //Loan
  readonly TITLE_LOAN_PAGE_MAIN_TITLE: string;
  readonly TITLE_ABOUT_PAGE_LIST_TITLE1: string;
  readonly TITLE_ABOUT_PAGE_LIST_TITLE1_1: string;
  readonly TITLE_ABOUT_PAGE_LIST_TITLE1_2: string;
  readonly TITLE_ABOUT_PAGE_LIST_TITLE2: string;
  readonly TITLE_ABOUT_PAGE_LIST_TITLE3: string;
  readonly TITLE_ABOUT_PAGE_LIST_TITLE3_1: string;
  readonly TITLE_ABOUT_PAGE_LIST_TITLE3_2: string;
  readonly TITLE_ABOUT_PAGE_LIST_TITLE4: string;
  readonly TITLE_ABOUT_PAGE_LIST_TITLE5: string;
  readonly TITLE_ABOUT_PAGE_LIST_TITLE5_1: string;

  //Bank
  readonly TITLE_BANK_PAGE_MAIN_TITLE: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE1: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE1_1: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE2: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE2_1: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE2_2: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE3: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE4: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE5: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE6: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE6_1: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE6_2: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE6_3: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE6_4: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE6_5: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE6_6: string;
  readonly TITLE_BANK_PAGE_LIST_TITLE7: string;

  //CRM
  readonly TITLE_CRM_PAGE_MAIN_TITLE: string;
  readonly TITLE_CRM_PAGE_MAIN_TITLE_1: string;
  readonly TITLE_CRM_PAGE_MAIN_TITLE_2: string;
  readonly TITLE_CRM_PAGE_MAIN_TITLE_3: string;
  readonly TITLE_CRM_PAGE_MAIN_TITLE2: string;
  readonly TITLE_CRM_PAGE_TABLE_TITLE1: string;
  readonly TITLE_CRM_PAGE_TABLE_TITLE_BEFORE: string;
  readonly TITLE_CRM_PAGE_TABLE_TITLE_AFTER: string;
  readonly TITLE_CRM_PAGE_TABLE_TITLE2: string;
  readonly TITLE_CRM_PAGE_TABLE_TITLE3: string;
  readonly TITLE_CRM_PAGE_TABLE_TITLE4: string;
  readonly TITLE_CRM_PAGE_TABLE_TITLE5: string;
  readonly TITLE_CRM_PAGE_TABLE_TITLE6: string;
  readonly TITLE_CRM_PAGE_TABLE_TITLE7: string;
  readonly TITLE_CRM_PAGE_MINUTES: string;

  //EQUARING
  readonly TITLE_EQUARING_PAGE_MAIN_TITLE: string;
  readonly TITLE_EQUARING_PAGE_SUBTITLE_1: string;
  readonly TITLE_EQUARING_PAGE_SUBTITLE_2: string;
  readonly TITLE_EQUARING_PAGE_SUBTITLE_3: string;
  readonly TITLE_EQUARING_PAGE_SUBTITLE_4: string;
  readonly TITLE_EQUARING_PAGE_SUBTITLE_5: string;

  //TURNKEY
  readonly TITLE_TURNKEY_PAGE_TITLE1: string;
  readonly TITLE_TURNKEY_PAGE_TITLE2: string;
  readonly TITLE_TURNKEY_PAGE_TITLE3: string;
  readonly TITLE_TURNKEY_PAGE_TITLE4: string;
  readonly TITLE_TURNKEY_PAGE_TITLE5: string;
  readonly TITLE_TURNKEY_PAGE_TITLE5_1: string;
  readonly TITLE_TURNKEY_PAGE_TITLE5_2: string;
  readonly TITLE_TURNKEY_PAGE_TITLE5_3: string;
  readonly TITLE_TURNKEY_PAGE_TITLE6: string;
  readonly TITLE_TURNKEY_PAGE_TITLE7: string;

  //SOLUTIONS
  readonly TITLE_SOLUTIONS_PAGE_MAIN_TITLE: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1: string
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_1: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_2: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_3: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_1: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_2: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_3: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_1: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_2: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_3: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_4: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_5: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_6: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_1: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_2: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_3: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_4: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_5: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_6: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_1: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_2: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_3: string;
  readonly TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_4: string;

  //TEAM
  readonly TITLE_TEAM_PAGE_MAIN_FULL_TITLE: string;
  readonly TITLE_TEAM_PAGE_MAIN_TITLE: string;
  readonly TITLE_TEAM_PAGE_TEAM_TITLE: string;

  // CONTACT
  readonly TITLE_CONTACT_PAGE_MAIN_TITLE: string;
  readonly TITLE_CONTACT_PAGE_MAIN_TITLE_1: string;
  readonly TITLE_CONTACT_PAGE_MAIN_TITLE_2: string;
  readonly TITLE_CONTACT_PAGE_MAIN_TITLE_3: string;
  readonly TITLE_CONTACT_PAGE_MAIN_TITLE_4: string;
  readonly TITLE_CONTACT_PAGE_MAIN_TITLE_5: string;
  readonly TITLE_CONTACT_PAGE_MAIN_TITLE_6: string;
  readonly TITLE_CONTACT_PAGE_MAIN_TITLE_7: string,
  readonly TITLE_CONTACT_PAGE_MAIN_TITLE_8: string,
  readonly TITLE_CONTACT_PAGE_MAIN_TITLE_9: string,

  //MENU
  readonly TITLE_MENU_PAGE_TITLE_1: string
  readonly TITLE_MENU_PAGE_TITLE_2: string
  readonly TITLE_MENU_PAGE_TITLE_3: string
  readonly TITLE_MENU_PAGE_TITLE_4: string
  readonly TITLE_MENU_PAGE_TITLE_5: string
  readonly TITLE_MENU_PAGE_TITLE_6: string
  readonly TITLE_MENU_PAGE_TITLE_7: string
  readonly TITLE_MENU_PAGE_TITLE_8: string
  readonly TITLE_MENU_PAGE_TITLE_9: string
  readonly TITLE_MENU_PAGE_TITLE_10: string
}
