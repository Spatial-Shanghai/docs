---
title: "Tripo3D Guide"
description: "AI-powered 3D model generation from text and images using Tripo3D — a complete guide for Spatial Shanghai 2026 hackathon participants."
---

## What is Tripo3D?

Tripo3D ([tripo3d.ai](https://www.tripo3d.ai)) is an AI-powered platform that generates production-ready 3D models from text prompts or reference images in seconds. Instead of spending hours modeling in Blender or Maya, you can describe what you want or upload a photo, and Tripo3D will generate a textured 3D model ready for use in your AR/VR projects.

### Why Use Tripo3D at This Hackathon?

- **Speed**: Generate 3D assets in seconds instead of hours — critical for a 24-hour hackathon.
- **No 3D modeling experience needed**: Describe what you want in plain language.
- **Export-ready**: Models come in standard formats (GLB, GLTF, FBX, OBJ) compatible with Three.js, Unity, and WebXR.
- **API available**: Automate model generation programmatically for dynamic content.

---

## Getting Started

### Step 1: Sign Up

1. Go to [tripo3d.ai](https://www.tripo3d.ai) and click **Sign Up** or **Get Started**.
2. You can sign up with your Google account or email address.
3. New accounts receive free credits to generate models — plenty for hackathon use.

### Step 2: Explore the Dashboard

Once logged in, you will see the main dashboard with options to:

- **Text to 3D**: Generate models from text descriptions
- **Image to 3D**: Generate models from uploaded images
- **My Models**: View and manage your previously generated models

---

## Generating 3D Models from Text

### How It Works

The text-to-3D feature lets you describe an object in natural language, and Tripo3D's AI will generate a 3D mesh with textures.

### Step-by-Step

1. Click **Text to 3D** on the dashboard.
2. Enter a detailed text prompt describing the 3D model you want. For example:
   - `"A futuristic robot with glowing blue eyes and metallic armor"`
   - `"A low-poly tree with autumn orange leaves"`
   - `"A wooden treasure chest with gold trim, slightly open"`
3. (Optional) Adjust generation settings such as style or quality level if available.
4. Click **Generate** and wait for the model to be created (typically 10-30 seconds).
5. Preview the model in the built-in 3D viewer — rotate, zoom, and inspect it.
6. If you are not satisfied, refine your prompt and regenerate.

### Prompt Tips for Text-to-3D

| Tip                                  | Example                                                    |
| ------------------------------------ | ---------------------------------------------------------- |
| Be specific about shape and material | `"A smooth ceramic coffee mug with a curved handle"`       |
| Mention art style                    | `"A stylized cartoon sword"` or `"A photorealistic apple"` |
| Include color details                | `"A red sports car with black racing stripes"`             |
| Specify polygon style if needed      | `"A low-poly fox"` or `"A high-detail dragon sculpture"`   |
| Keep it to a single object           | Single objects produce better results than complex scenes  |

---

## Generating 3D Models from Images

### How It Works

The image-to-3D feature takes a 2D reference image and reconstructs a full 3D model from it. This is useful when you have concept art, photos of real objects, or sketches you want to bring into 3D.

### Step-by-Step

1. Click **Image to 3D** on the dashboard.
2. Upload a clear image of the object you want to convert. Supported formats include PNG, JPG, and WebP.
3. For best results, use an image with:
   - A single, clearly visible object
   - A clean or simple background (white or solid color is ideal)
   - Good lighting with minimal shadows
   - Multiple angles visible if possible
4. Click **Generate** and wait for processing.
5. Preview and inspect the generated 3D model.
6. Download or refine as needed.

### Image Tips

- **Remove backgrounds** before uploading — use tools like [remove.bg](https://www.remove.bg) for quick background removal.
- **Avoid images with multiple objects** — the AI works best on a single subject.
- **Higher resolution images** produce better detail in the generated model.
- **Photos of real objects** from a straight-on angle tend to produce the most accurate geometry.

---

## Exporting Models

### Supported Formats

Tripo3D supports exporting in several standard 3D formats:

| Format   | Best For                  | Notes                                                          |
| -------- | ------------------------- | -------------------------------------------------------------- |
| **GLB**  | Three.js, WebXR, web apps | Binary GLTF — compact, includes textures. Recommended for web. |
| **GLTF** | Three.js, WebXR, web apps | JSON-based with separate texture files.                        |
| **FBX**  | Unity, Unreal Engine      | Widely supported in game engines.                              |
| **OBJ**  | General 3D software       | Simple format, good for static meshes.                         |

### How to Export

1. Open the model you want to export from **My Models** or after generation.
2. Click the **Download** or **Export** button.
3. Select your desired format (GLB is recommended for web-based AR/VR projects).
4. The file will download to your computer, ready to import into your project.

**For this hackathon, we recommend using GLB format** — it is the most compatible with Three.js and WebXR, and it bundles the mesh and textures into a single file.

---

## Using the Tripo3D API

### Getting Your API Key

For this hackathon, **ask Jesse (the hackathon organizer) for your Tripo3D API key**. He will provide you with the credentials needed to access the Tripo3D API for free during the event.

Once you receive your API key from Jesse:

1. Store it securely in your `.env` file as `TRIPO3D_API_KEY`.
2. Never commit the `.env` file to git or share your API key publicly.
3. You're ready to start using the API examples below.

### Text-to-3D via API

Here is an example of generating a 3D model from a text prompt using the Tripo3D API:

```javascript
// Step 1: Create a task to generate a 3D model
const createTaskResponse = await fetch(
  "https://api.tripo3d.ai/v2/openapi/task",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TRIPO3D_API_KEY}`,
    },
    body: JSON.stringify({
      type: "text_to_model",
      prompt: "A futuristic helmet with a glowing visor",
    }),
  },
);

const {
  data: { task_id },
} = await createTaskResponse.json();
console.log("Task created:", task_id);

// Step 2: Poll for task completion
async function waitForTask(taskId) {
  while (true) {
    const statusResponse = await fetch(
      `https://api.tripo3d.ai/v2/openapi/task/${taskId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TRIPO3D_API_KEY}`,
        },
      },
    );
    const { data } = await statusResponse.json();

    if (data.status === "success") {
      return data;
    } else if (data.status === "failed") {
      throw new Error("Task failed: " + data.message);
    }

    // Wait 2 seconds before polling again
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
}

const result = await waitForTask(task_id);
console.log("Model URL:", result.output.model);
```

### Image-to-3D via API

```javascript
// Step 1: Upload the image to get a file token
const formData = new FormData();
formData.append("file", imageFile); // imageFile is a File or Blob

const uploadResponse = await fetch("https://api.tripo3d.ai/v2/openapi/upload", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TRIPO3D_API_KEY}`,
  },
  body: formData,
});

const {
  data: { image_token },
} = await uploadResponse.json();

// Step 2: Create an image-to-model task
const createTaskResponse = await fetch(
  "https://api.tripo3d.ai/v2/openapi/task",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TRIPO3D_API_KEY}`,
    },
    body: JSON.stringify({
      type: "image_to_model",
      file: {
        type: "jpg",
        file_token: image_token,
      },
    }),
  },
);

const {
  data: { task_id },
} = await createTaskResponse.json();

// Step 3: Poll for completion (same as text-to-3D)
const result = await waitForTask(task_id);
console.log("Model URL:", result.output.model);
```

### Downloading the Model

```javascript
// Download the generated GLB file
const modelUrl = result.output.model;
const modelResponse = await fetch(modelUrl);
const modelBlob = await modelResponse.blob();

// Save to file (Node.js)
import { writeFile } from "fs/promises";
const buffer = Buffer.from(await modelBlob.arrayBuffer());
await writeFile("generated-model.glb", buffer);
```

### Using the Tripo3D API with Python

If you prefer Python for backend integration, here's a complete example that generates a 3D model using the Tripo3D API:

```python
import requests
import time

# Configuration
API_KEY = "your-tripo3d-api-key"
BASE_URL = "https://api.tripo3d.ai/v2/openapi"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

def run_tripo_task():
    # Step 1: Submit a task to generate a 3D model from text
    payload = {
        "type": "text_to_model",
        "prompt": "A cute wooden chair"
    }

    print("🚀 Submitting task to Tripo...")
    try:
        response = requests.post(f"{BASE_URL}/task", headers=headers, json=payload)
        res_data = response.json()
    except Exception as e:
        print(f"❌ Network error: {e}")
        return

    if res_data.get("code") != 0:
        print(f"❌ Task submission failed: {res_data}")
        return

    task_id = res_data["data"]["task_id"]
    print(f"✅ Task created! ID: {task_id}")

    # Step 2: Poll for results
    print("⏳ Generating 3D model, please wait...")
    while True:
        try:
            status_res = requests.get(f"{BASE_URL}/task/{task_id}", headers=headers).json()
        except Exception as e:
            print(f"\n⚠️ Query error (retrying): {e}")
            time.sleep(2)
            continue

        data = status_res.get("data", {})
        status = data.get("status")
        progress = data.get("progress", 0)

        if status == "success":
            print("\n✨ Generation successful!")
            print("=" * 60)

            # Get the result dictionary
            result = data.get("result", {})

            # Automatically iterate through and extract all resources with URLs
            found_resource = False
            for key, value in result.items():
                # Case A: Result is a dictionary with a URL
                if isinstance(value, dict) and "url" in value:
                    print(f"🔗 [{key.upper()}]: {value['url']}")
                    found_resource = True
                # Case B: Result is directly a URL string
                elif isinstance(value, str) and value.startswith("http"):
                    print(f"🔗 [{key.upper()}]: {value}")
                    found_resource = True

            if not found_resource:
                print("⚠️ No direct links found in result, check raw data:")
                print(result)

            print("=" * 60)
            break

        elif status == "failed":
            error_msg = data.get("error_message", "Unknown error")
            print(f"\n❌ Task failed: {error_msg}")
            break
        else:
            # Show progress dynamically
            print(f"\r Current status: {status} | Progress: {progress}%", end="", flush=True)
            time.sleep(2)

if __name__ == "__main__":
    run_tripo_task()
```

This Python script demonstrates the full workflow:

1. Authenticates with your API key
2. Submits a text-to-model generation task
3. Polls the task status every 2 seconds
4. Extracts and displays the download URL when complete

---

## Integrating with Three.js and WebXR

### Loading a GLB Model in Three.js

Once you have exported or downloaded a GLB file from Tripo3D, you can load it directly into a Three.js scene:

```javascript
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting (important for seeing textures properly)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

// Load the Tripo3D model
const loader = new GLTFLoader();
loader.load(
  "path/to/your-model.glb",
  (gltf) => {
    const model = gltf.scene;

    // Center and scale the model
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2 / maxDim; // Normalize to roughly 2 units
    model.scale.setScalar(scale);

    scene.add(model);
  },
  (progress) => {
    console.log(
      "Loading:",
      ((progress.loaded / progress.total) * 100).toFixed(1) + "%",
    );
  },
  (error) => {
    console.error("Error loading model:", error);
  },
);

// Position camera and start render loop
camera.position.set(0, 1, 3);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```

### Using Tripo3D Models in a WebXR Scene

To place your generated 3D model into an immersive AR or VR experience:

```javascript
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { VRButton } from "three/addons/webxr/VRButton.js";
// For AR, use: import { ARButton } from "three/addons/webxr/ARButton.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  100,
);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);

// Add the VR/AR button
document.body.appendChild(VRButton.createButton(renderer));
// For AR: document.body.appendChild(ARButton.createButton(renderer));

// Add lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 2, 3);
scene.add(light);

// Load Tripo3D model into the XR scene
const loader = new GLTFLoader();
loader.load("your-tripo3d-model.glb", (gltf) => {
  const model = gltf.scene;
  model.position.set(0, 1.2, -2); // Place 2 meters in front, at eye height
  model.scale.setScalar(0.5);
  scene.add(model);
});

// XR render loop
renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});
```

### Dynamic Model Generation Pipeline

For advanced hackathon projects, you can build a pipeline that generates models on-the-fly based on user input:

```javascript
// Example: User types a description, model appears in the scene
async function generateAndLoad(prompt, scene) {
  // 1. Call Tripo3D API to generate model
  const taskResponse = await fetch("https://api.tripo3d.ai/v2/openapi/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      type: "text_to_model",
      prompt: prompt,
    }),
  });
  const {
    data: { task_id },
  } = await taskResponse.json();

  // 2. Wait for generation to complete
  const result = await waitForTask(task_id);

  // 3. Load the model directly from the URL into Three.js
  const loader = new GLTFLoader();
  return new Promise((resolve, reject) => {
    loader.load(
      result.output.model,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        resolve(model);
      },
      undefined,
      reject,
    );
  });
}

// Usage
const model = await generateAndLoad(
  "A glowing crystal orb floating on a stone pedestal",
  scene,
);
```

---

## Backend Integration Templates

If you are building a full-stack application with Tripo3D, **pre-built integration templates are available** in the `public/skills/tripo-integration/` folder. These templates include:

- **Next.js API routes** (both Pages and App Router) for model generation and status polling
- **Backend handlers** for Tripo3D API integration
- **Example packages** to get you started quickly

Instead of writing API endpoints from scratch, copy the templates from `public/skills/tripo-integration/templates/` into your project. They include:

- `route-nextjs-pages-generate.ts` — POST endpoint to generate models
- `route-nextjs-pages-status.ts` — GET endpoint to check generation status
- `route-nextjs-app-generate.ts` — App Router version of generation
- `standalone-package.json` — Dependencies needed for the backend

**To use these templates:**

1. Copy the relevant template files into your `pages/api/` or `app/api/` directory
2. Install dependencies listed in `standalone-package.json`
3. Update environment variables with your Tripo3D API key
4. Call these endpoints from your frontend to generate models dynamically

This saves hours of boilerplate coding during the hackathon.

---

## Hackathon Tips

### Getting Good Results Quickly

1. **Start with simple objects, then iterate.** A `"sword"` will generate faster and more reliably than `"an ornate medieval longsword with runic engravings on the blade and a dragon-shaped crossguard"`. Get the base shape first, then add detail in subsequent prompts.

2. **Use GLB format exclusively for web projects.** Do not waste time converting between formats. GLB works directly with Three.js and WebXR with no extra steps.

3. **Generate multiple variants.** Run the same prompt 2-3 times — results vary each time, and you can pick the best one.

4. **Pre-generate assets.** If you know what models you need, generate them early in the hackathon so they are ready when you need them.

5. **Use the API for batch generation.** If your project needs many similar models (e.g., furniture for a virtual room), write a script to generate them all at once.

### Prompt Engineering for 3D

The quality of your generated model depends heavily on your prompt. Here are patterns that work well:

**Do:**

- `"A wooden desk with drawers, realistic style"` — clear object + material + style
- `"Low-poly pine tree, game asset style"` — polygon style + specific object type
- `"A sci-fi blaster pistol, metallic surface, blue energy glow"` — object + material + visual effects
- `"Cartoon-style mushroom house with a red spotted cap"` — art style + specific details

**Avoid:**

- `"A beautiful scene with mountains and rivers"` — too broad, multiple elements
- `"Something cool"` — too vague
- `"A person standing next to a car"` — multiple subjects and human figures are harder to generate well

### Optimizing Models for Performance

Generated models may sometimes have high polygon counts. For smooth performance in WebXR:

- **Request low-poly in your prompt** when high detail is not needed: `"low-poly cat"`.
- **Use `THREE.LOD` (Level of Detail)** to swap between high and low detail models based on camera distance.
- **Compress GLB files** using [gltf-transform](https://gltf-transform.donmccurdy.com/) or [glTF Pipeline](https://github.com/CesiumGS/gltf-pipeline) to reduce file size:
  ```bash
  npx gltf-transform optimize input.glb output.glb --compress draco
  ```
- **Monitor frame rate** during development — if it drops below 72fps in VR, reduce model complexity.

---

## Quick Reference

| Task                       | Where                                                  |
| -------------------------- | ------------------------------------------------------ |
| Generate model from text   | [tripo3d.ai](https://www.tripo3d.ai) dashboard or API  |
| Generate model from image  | [tripo3d.ai](https://www.tripo3d.ai) dashboard or API  |
| API documentation          | [tripo3d.ai/docs](https://www.tripo3d.ai/docs)         |
| Best export format for web | GLB                                                    |
| Load in Three.js           | `GLTFLoader` from `three/addons/loaders/GLTFLoader.js` |
| Compress models            | `npx gltf-transform optimize input.glb output.glb`     |

---

## Additional Resources

- [Tripo3D Official Site](https://www.tripo3d.ai)
- [Tripo3D API Documentation](https://www.tripo3d.ai/docs)
- [Three.js GLTFLoader Documentation](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)
- [WebXR Device API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)
- [glTF-Transform CLI](https://gltf-transform.donmccurdy.com/cli)

If you encounter issues or need help during the hackathon, ask a mentor or check the Tripo3D documentation.
