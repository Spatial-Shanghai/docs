import requests
import time

# 配置信息
API_KEY = "tsk_dgUck16euLxZwpQWdZxx6ZJUOwm6WkBteCp-44gETVO"
BASE_URL = "https://api.tripo3d.ai/v2/openapi"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

def run_tripo_task():
    # 1. 提交任务 (确保使用最新的 V2 类型 text_to_model)
    payload = {
        "type": "text_to_model",
        "prompt": "A cute wooden chair"
    }
    
    print("🚀 正在向 Tripo 提交任务...")
    try:
        response = requests.post(f"{BASE_URL}/task", headers=headers, json=payload)
        res_data = response.json()
    except Exception as e:
        print(f"❌ 网络请求异常: {e}")
        return

    if res_data.get("code") != 0:
        print(f"❌ 任务提交失败: {res_data}")
        return

    task_id = res_data["data"]["task_id"]
    print(f"✅ 任务已创建! ID: {task_id}")

    # 2. 轮询结果
    print("⏳ 正在生成 3D 模型，请稍候...")
    while True:
        try:
            status_res = requests.get(f"{BASE_URL}/task/{task_id}", headers=headers).json()
        except Exception as e:
            print(f"\n⚠️ 查询出错 (将重试): {e}")
            time.sleep(2)
            continue
            
        data = status_res.get("data", {})
        status = data.get("status")
        progress = data.get("progress", 0)
        
        if status == "success":
            print("\n✨ 生成成功!")
            print("=" * 60)
            
            # 获取结果字典
            result = data.get("result", {})
            
            # 自动遍历并提取所有包含 url 的资源
            found_resource = False
            for key, value in result.items():
                # 情况 A: 结果是一个带 url 的字典 (如你刚才遇到的情况)
                if isinstance(value, dict) and "url" in value:
                    print(f"🔗 [{key.upper()}]: {value['url']}")
                    found_resource = True
                # 情况 B: 结果直接就是 URL 字符串
                elif isinstance(value, str) and value.startswith("http"):
                    print(f"🔗 [{key.upper()}]: {value}")
                    found_resource = True
            
            if not found_resource:
                print("⚠️ 未能在 result 中找到直接链接，请检查原始数据:")
                print(result)
                
            print("=" * 60)
            break
            
        elif status == "failed":
            error_msg = data.get("error_message", "未知错误")
            print(f"\n❌ 任务失败: {error_msg}")
            break
        else:
            # 动态显示进度
            print(f"\r当前状态: {status} | 进度: {progress}%", end="", flush=True)
            time.sleep(2)

if __name__ == "__main__":
    run_tripo_task()