/*

# シラバス

授業科目名,担当教員,役職,単位数,必修・選択・自由,開講年次,開講学期,実務経験,備考,シラバスURL

*/

export type Require = "必修" | "選択" | "自由";
export type Role = "教授" | "准教授" | "助教" | "非常勤講師";
export type Target =
  | "B1"
  | "B2"
  | "B3"
  | "B4"
  | "M1"
  | "M2"
  | "D1"
  | "D2"
  | "D3";
export type Semester =
  | "前期"
  | "前期前半"
  | "前期後半"
  | "後期"
  | "後期前半"
  | "後期後半";
export type pw = "有" | "無";

export interface Class {
  year: number;
  id: number;
  subject: string;
  teacher: string;
  role: Role;
  unit: number;
  require: Require;
  target: Array<Target>;
  semester: Semester;
  pw: any;
  description: string;
}
