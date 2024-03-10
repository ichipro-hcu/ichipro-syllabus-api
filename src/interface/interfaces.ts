/*

# シラバス

授業科目名,担当教員,役職,単位数,必修・選択・自由,開講年次,開講学期,実務経験,備考,シラバスURL

*/

export type Require = "必修" | "選択" | "自由";
export type Role = "教授" | "准教授" | "助教" | "非常勤講師";
export interface Target {
  B1: boolean;
  B2: boolean;
  B3: boolean;
  B4: boolean;
  M1: boolean;
  M2: boolean;
  D1: boolean;
  D2: boolean;
  D3: boolean;
  parseError: boolean;
}

export interface Semester {
  前期前半: boolean;
  前期後半: boolean;
  後期前半: boolean;
  後期後半: boolean;
  特別編成: boolean;
  parseError: boolean;
}

export type pw = "有" | "無";

export interface Class {
  year: number;
  id: number;
  subject: string;
  teacher: string;
  role: Role;
  unit: number;
  require: Require;
  target: Target;
  semester: Semester;
  pw: any;
  description: string;
}
