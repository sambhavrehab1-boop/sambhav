import os
from pathlib import Path
from PIL import Image

def convert_to_webp(directory):
    # Extensions to look for
    extensions = ['*.png', '*.jpg', '*.jpeg']
    
    # Get all matching files
    files = []
    p = Path(directory)
    for ext in extensions:
        files.extend(p.rglob(ext))
    
    print(f"Found {len(files)} images to convert...")
    
    for file_path in files:
        try:
            # Skip if it's already webp (shouldn't happen with glob logic but good safety)
            if file_path.suffix.lower() == '.webp':
                continue
                
            # Create new path with .webp extension
            new_path = file_path.with_suffix('.webp')
            
            # Check if webp already exists to avoid re-work if run multiple times
            if new_path.exists():
                print(f"Skipping {file_path.name} (WebP already exists)")
                continue
            
            # Open and save as webp
            with Image.open(file_path) as img:
                # Save with quality=80 for good balance
                img.save(new_path, 'webp', quality=80)
                print(f"Converted: {file_path.name} -> {new_path.name}")
                
        except Exception as e:
            print(f"Error converting {file_path.name}: {e}")

if __name__ == "__main__":
    # Install Pillow if not present (using pip in a subprocess is hacky, assuming it's there or user has it)
    # But for this environment, we assume standard libs or availability. 
    # If PIL is missing, we might need to ask user or use a magic shell command.
    # We will try to import PIL. If it fails, we will print a message.
    try:
        current_dir = os.getcwd()
        public_dir = os.path.join(current_dir, 'public')
        if os.path.exists(public_dir):
            convert_to_webp(public_dir)
        else:
            print(f"Public directory not found at {public_dir}")
    except ImportError:
        print("Pillow (PIL) library not found. Please install it with 'pip install Pillow'")
