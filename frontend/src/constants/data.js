const products = [
  {
    "id": "iphone-17-pro-max-1",
    "category": "iPhone",
    "model": "iPhone 17 Pro Max",
    "image": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 1199,
    "currency": "USD",
    "storage_options": [
      { "capacity": "256GB", "price": 1199 },
      { "capacity": "512GB", "price": 1399 },
      { "capacity": "1TB", "price": 1599 }
    ],
    "color": ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    "display": "6.7-inch Super Retina XDR display with ProMotion",
    "chip": "A17 Pro chip",
    "camera": "48MP main camera, 5x optical zoom, Night mode on all cameras",
    "battery": "Up to 29 hours video playback",
    "os": "iOS 17",
    "releaseDate": "2023-09-22",
    "details": {
      "connectivity": ["5G", "Wi-Fi 6E", "Bluetooth 5.3"],
      "water_resistance": "IP68 (6 meters for 30 minutes)",
      "face_id": "TrueDepth camera system",
      "mag_safe": "Compatible with MagSafe accessories"
    }
  },
  {
    "id": "iphone-17-pro-1",
    "category": "iPhone",
    "model": "iPhone 17 Pro",
    "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 999,
    "currency": "USD",
    "storage_options": [
      { "capacity": "128GB", "price": 999 },
      { "capacity": "256GB", "price": 1099 },
      { "capacity": "512GB", "price": 1299 },
      { "capacity": "1TB", "price": 1499 }
    ],
    "color": ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    "display": "6.1-inch Super Retina XDR display with ProMotion",
    "chip": "A17 Pro chip",
    "camera": "48MP main camera, 5x optical zoom, Night mode on all cameras",
    "battery": "Up to 23 hours video playback",
    "os": "iOS 17",
    "releaseDate": "2023-09-22",
    "details": {
      "connectivity": ["5G", "Wi-Fi 6E", "Bluetooth 5.3"],
      "water_resistance": "IP68 (6 meters for 30 minutes)",
      "face_id": "TrueDepth camera system",
      "mag_safe": "Compatible with MagSafe accessories"
    }
  },
  {
    "id": "macbook-pro-14-m3-1",
    "category": "MacBook",
    "model": "MacBook Pro 14-inch (M3 Pro)",
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 1999,
    "currency": "USD",
    "storage_options": [
      { "capacity": "512GB", "price": 1999 },
      { "capacity": "1TB", "price": 2299 },
      { "capacity": "2TB", "price": 2899 }
    ],
    "color": ["Space Black", "Silver"],
    "display": "14.2-inch Liquid Retina XDR display",
    "chip": "Apple M3 Pro chip",
    "battery": "Up to 18 hours",
    "ports": ["HDMI", "SDXC", "MagSafe 3", "3 Thunderbolt 4"],
    "os": "macOS Sonoma",
    "releaseDate": "2023-11-07",
    "details": {
      "memory": "18GB unified memory",
      "display_features": ["ProMotion", "P3 wide color", "True Tone"],
      "keyboard": "Backlit Magic Keyboard with Touch ID",
      "wireless": ["Wi-Fi 6E", "Bluetooth 5.3"]
    }
  },
  {
    "id": "ipad-pro-13-m2-1",
    "category": "iPad",
    "model": "iPad Pro 13-inch (M2)",
    "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 799,
    "currency": "USD",
    "storage_options": [
      { "capacity": "128GB", "price": 799 },
      { "capacity": "256GB", "price": 899 },
      { "capacity": "512GB", "price": 1099 },
      { "capacity": "1TB", "price": 1499 },
      { "capacity": "2TB", "price": 1899 }
    ],
    "color": ["Space Gray", "Silver"],
    "display": "12.9-inch Liquid Retina XDR display (Mini-LED)",
    "chip": "Apple M2 chip",
    "accessories": ["Apple Pencil (2nd gen)", "Magic Keyboard"],
    "os": "iPadOS 17",
    "releaseDate": "2023-06-07",
    "details": {
      "camera": "12MP Ultra Wide front camera with Center Stage",
      "audio": "Four speaker audio system",
      "connectivity": ["5G", "Wi-Fi 6E", "Thunderbolt / USB 4"],
      "face_id": "TrueDepth camera system"
    }
  },
  {
    "id": "apple-watch-ultra-2-1",
    "category": "Wearables",
    "model": "Apple Watch Ultra 2",
    "image": "https://images.unsplash.com/photo-1713056878930-c5604da9acfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 799,
    "currency": "USD",
    "band_color": ["Deep Navy", "Orange", "Silver Aluminum"],
    "case_material": "Titanium",
    "display": "Always-On Retina display",
    "chip": "Apple S9 SiP",
    "battery": "Up to 36 hours, 72 hours in Low Power Mode",
    "features": ["Depth sensor", "Action button", "Emergency SOS", "Precision Finding for iPhone"],
    "os": "watchOS 10",
    "releaseDate": "2023-09-22",
    "details": {
      "water_resistance": "WR100",
      "health_sensors": ["Blood oxygen", "ECG", "Heart rate", "Temperature sensing"],
      "durability": "MIL-STD-810H certified",
      "connectivity": ["GPS + Cellular", "Bluetooth 5.3"]
    }
  },
  {
    "id": "airpods-pro-2-1",
    "category": "Accessories",
    "model": "AirPods Pro (2nd gen) with USB-C",
    "image": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 249,
    "currency": "USD",
    "features": ["Active Noise Cancellation", "Adaptive Audio", "Personalized Spatial Audio", "Touch controls"],
    "charging_case": "MagSafe and USB-C compatible",
    "battery": "Up to 6 hours listening time (up to 30 hours with case)",
    "releaseDate": "2023-09-22",
    "details": {
      "audio_tech": ["Custom high-excursion driver", "High Dynamic Range amplifier"],
      "microphones": ["Voice-detecting accelerometer", "Beamforming microphones"],
      "sweat_resistance": "IPX4 rating",
      "compatibility": ["iPhone", "iPad", "Mac", "Apple TV", "Apple Watch"]
    }
  },
  {
    "id": "iphone-17-se-1",
    "category": "iPhone",
    "model": "iPhone 17 SE",
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 499,
    "currency": "USD",
    "storage_options": [
      { "capacity": "64GB", "price": 499 },
      { "capacity": "128GB", "price": 549 },
      { "capacity": "256GB", "price": 649 }
    ],
    "color": ["Product Red", "Midnight", "Starlight", "Blue"],
    "display": "6.1-inch Retina HD display",
    "chip": "A15 Bionic chip",
    "camera": "12MP dual-camera system with Night mode",
    "battery": "Up to 15 hours video playback",
    "os": "iOS 17",
    "releaseDate": "2024-03-15",
    "details": {
      "connectivity": ["5G", "Wi-Fi 6", "Bluetooth 5.0"],
      "touch_id": "Touch ID in home button",
      "water_resistance": "IP67 (1 meter for 30 minutes)",
      "mag_safe": "Compatible with MagSafe accessories"
    }
  },
  {
    "id": "macbook-air-15-m3-1",
    "category": "MacBook",
    "model": "MacBook Air 15-inch (M3)",
    "image": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 1299,
    "currency": "USD",
    "storage_options": [
      { "capacity": "256GB", "price": 1299 },
      { "capacity": "512GB", "price": 1499 },
      { "capacity": "1TB", "price": 1899 },
      { "capacity": "2TB", "price": 2299 }
    ],
    "color": ["Space Gray", "Silver", "Starlight", "Midnight", "Space Black"],
    "display": "15.3-inch Liquid Retina display",
    "chip": "Apple M3 chip with 8-core CPU",
    "battery": "Up to 18 hours",
    "weight": "3.3 pounds",
    "os": "macOS Sonoma",
    "releaseDate": "2024-03-04",
    "details": {
      "memory": "8GB unified memory (configurable to 16GB or 24GB)",
      "display_features": ["P3 wide color", "True Tone", "500 nits brightness"],
      "ports": ["2 x Thunderbolt 4", "MagSafe 3", "3.5mm headphone jack"],
      "wireless": ["Wi-Fi 6E", "Bluetooth 5.3"]
    }
  },
  {
    "id": "ipad-mini-7-1",
    "category": "iPad",
    "model": "iPad mini (7th generation)",
    "image": "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 499,
    "currency": "USD",
    "storage_options": [
      { "capacity": "64GB", "price": 499 },
      { "capacity": "256GB", "price": 649 }
    ],
    "color": ["Space Gray", "Starlight", "Pink", "Purple"],
    "display": "8.3-inch Liquid Retina display",
    "chip": "A16 Bionic chip",
    "accessories": ["Apple Pencil (2nd gen)", "Smart Folio"],
    "os": "iPadOS 17",
    "releaseDate": "2023-09-22",
    "details": {
      "camera": "12MP Ultra Wide front camera with Center Stage",
      "audio": "Landscape stereo speakers",
      "connectivity": ["5G", "Wi-Fi 6E", "USB-C"],
      "touch_id": "Touch ID in top button"
    }
  },
  {
    "id": "apple-watch-se-3-1",
    "category": "Wearables",
    "model": "Apple Watch SE (3rd generation)",
    "image": "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 249,
    "currency": "USD",
    "band_color": ["Midnight", "Starlight", "Silver"],
    "case_size": ["40mm", "44mm"],
    "display": "Retina display",
    "chip": "Apple S8 SiP",
    "battery": "Up to 18 hours",
    "features": ["Crash Detection", "Emergency SOS", "Family Setup", "Fitness Tracking"],
    "os": "watchOS 10",
    "releaseDate": "2024-09-15",
    "details": {
      "water_resistance": "50 meters",
      "health_sensors": ["Heart rate", "Accelerometer", "Gyroscope"],
      "connectivity": ["GPS", "GPS + Cellular"],
      "compatibility": "iPhone 11 or later with iOS 17 or later"
    }
  },
  {
    "id": "airpods-max-2-1",
    "category": "Accessories",
    "model": "AirPods Max (2nd generation)",
    "image": "https://images.unsplash.com/photo-1668073343175-31e76569eb8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 549,
    "currency": "USD",
    "color": ["Space Gray", "Silver", "Sky Blue", "Pink", "Green"],
    "features": ["Active Noise Cancellation", "Transparency mode", "Spatial Audio", "Digital Crown"],
    "battery": "Up to 20 hours listening time",
    "releaseDate": "2024-06-10",
    "details": {
      "driver_technology": "Custom dynamic driver",
      "microphones": "Eight microphones for ANC and voice pickup",
      "materials": ["Stainless steel frame", "Anodized aluminum cups", "Mesh canopy"],
      "connectivity": ["Bluetooth 5.3", "Apple H1 chip"]
    }
  },
  {
    "id": "homepod-mini-2-1",
    "category": "Accessories",
    "model": "HomePod mini (2nd generation)",
    "image": "https://images.unsplash.com/photo-1659943063471-2fcc8b45edd2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 99,
    "currency": "USD",
    "color": ["Space Gray", "White", "Blue", "Yellow", "Orange"],
    "features": ["Siri integration", "Intercom", "Temperature & humidity sensors", "Thread support"],
    "audio": "High-excursion woofer, dual passive radiators",
    "releaseDate": "2024-01-15",
    "details": {
      "microphones": "Four-microphone array",
      "connectivity": ["Wi-Fi 6", "Bluetooth 5.0", "Thread"],
      "compatibility": ["iPhone", "iPad", "Mac", "Apple TV"],
      "smart_home": "HomeKit compatible, Matter support"
    }
  },
  {
    "id": "mac-studio-m2-ultra-1",
    "category": "Mac",
    "model": "Mac Studio (M2 Ultra)",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 1999,
    "currency": "USD",
    "storage_options": [
      { "capacity": "512GB", "price": 1999 },
      { "capacity": "1TB", "price": 2299 },
      { "capacity": "2TB", "price": 2899 },
      { "capacity": "4TB", "price": 4099 },
      { "capacity": "8TB", "price": 6099 }
    ],
    "color": ["Silver"],
    "chip": "Apple M2 Ultra chip",
    "memory": "64GB unified memory (configurable to 128GB or 192GB)",
    "ports": ["4 x Thunderbolt 4", "2 x USB-C", "2 x USB-A", "HDMI", "10Gb Ethernet", "SDXC", "3.5mm audio"],
    "os": "macOS Sonoma",
    "releaseDate": "2023-06-13",
    "details": {
      "display_support": "Up to 8K resolution",
      "thermal_system": "Dual centrifugal fans and copper heat sink",
      "wireless": ["Wi-Fi 6E", "Bluetooth 5.3"],
      "dimensions": "3.7 x 7.7 inches (height x diameter)"
    }
  },
  {
    "id": "imac-24-m3-1",
    "category": "Mac",
    "model": "iMac 24-inch (M3)",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 1299,
    "currency": "USD",
    "storage_options": [
      { "capacity": "256GB", "price": 1299 },
      { "capacity": "512GB", "price": 1499 },
      { "capacity": "1TB", "price": 1899 },
      { "capacity": "2TB", "price": 2299 }
    ],
    "color": ["Blue", "Green", "Pink", "Silver", "Yellow", "Orange", "Purple"],
    "display": "24-inch 4.5K Retina display",
    "chip": "Apple M3 chip",
    "memory": "8GB unified memory (configurable to 16GB or 24GB)",
    "ports": ["2 x Thunderbolt 4", "2 x USB-C", "Gigabit Ethernet", "3.5mm headphone jack"],
    "os": "macOS Sonoma",
    "releaseDate": "2024-04-30",
    "details": {
      "camera": "1080p FaceTime HD camera",
      "audio": "Six-speaker system with force-cancelling woofers",
      "microphones": "Studio-quality three-microphone array",
      "accessories": ["Magic Keyboard with Touch ID", "Magic Mouse"]
    }
  },
  {
    "id": "apple-tv-4k-2024-1",
    "category": "Accessories",
    "model": "Apple TV 4K (2024)",
    "image": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "price": 129,
    "currency": "USD",
    "storage_options": [
      { "capacity": "64GB", "price": 129 },
      { "capacity": "128GB", "price": 149 }
    ],
    "color": ["Black"],
    "chip": "Apple A15 Bionic chip",
    "video_support": ["4K Dolby Vision", "HDR10+", "HLG"],
    "audio_support": ["Dolby Atmos", "Spatial Audio"],
    "features": ["Siri Remote", "Thread support", "HomeKit hub"],
    "releaseDate": "2024-05-20",
    "details": {
      "connectivity": ["Wi-Fi 6", "Bluetooth 5.0", "Gigabit Ethernet", "HDMI 2.1"],
      "content_services": ["Apple TV+", "Netflix", "Disney+", "Prime Video compatible"],
      "gaming": "Apple Arcade compatible with game controllers",
      "smart_home": "HomeKit secure video support"
    }
  }
]

export default products