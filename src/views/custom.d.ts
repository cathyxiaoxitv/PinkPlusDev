import customTag from "@/components/Money/customTag.vue";

type RootState = {
  tagList: Tag[],
  customTagList:customTag[],
  recordList:RecordItem[]
  createTagError:Error|null
}

type Tag = {
  id:string,
  name: string,
  type:string
}

type customTag={
  id:string,
  name:string
}

type RecordItem = {
  type: string
  createdAt?: string
  notes: string
  amount: number
  category: Tag
}

type ReportItem = {
  text:string
  value:string
}