import { ElNotification } from 'element-plus'

// 消息提示
export function toast(message, type = "success", dangerouslyUseHTMLString) {
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration: 3000
    })
}