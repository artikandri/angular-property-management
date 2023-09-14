export class MenuItem {
    text: String
    url: String
    notificationCount: Number
    [key:string] : any

    constructor(text: String, url: String, notificationCount: Number) {
        this.text = text
        this.url = url
        this.notificationCount = notificationCount
    }
}

export class SummaryItem {
    title: String
    count: Number
    icon: String

    constructor(title: String, count: Number, icon: String) {
        this.title = title
        this.count = count
        this.icon = icon
    }
}

export class StepItem {
    instruction: String
    current: number
    total: number
    icon: any
    type: String

    constructor(instruction: String, current: number, total: number, icon: any, type: String) {
        this.instruction = instruction
        this.current = current
        this.total = total
        this.icon = icon
        this.type = type

    }
}

export class BookingItem {
    name: String
    url: String
    from: String
    to: String
    total: Number
    currency: String
    [key:string]: any

    constructor(name: String, url: String, from: String, to: String, total: Number, currency: String) {
        this.name = name
        this.url = url
        this.from = from
        this.to = to 
        this.total = total
        this.currency = currency
    }
}

export class ActivityItem {
    datetime: String
    title: String
    address: String
    shareCount: Number
    category: String
    [key:string]: any

    constructor(datetime: String, title: String, address: String, shareCount: Number, category: String) {
        this.datetime = datetime
        this.title = title
        this.address = address
        this.shareCount = shareCount
        this.category = category
    }
}

export interface ButtonProps {
    className?: String
    type: String
    text: String
    [key:string]: any
}

export interface LabelProps {
    className?: String
    type: String
    text: String
    [key:string]: any
}

export interface IconProps {
    className: String
    type: String
    [key:string]: any
}

export interface SummaryCardProps {
    iconUrl?: String
    title?: String
}

export interface StepCardProps {
    instruction: String
    current: number
    total: number
    icon: any
    type: String
  }