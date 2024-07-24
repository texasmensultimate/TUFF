# concat.py
# This script first finds and writes the contents of project-hierarchy.txt,
# then concatenates the contents of all other project files, excluding specific file types and specific files,
# into a single text file.

import os

ROOT_DIR = "C:\\Users\\ihuyd\\Desktop\\TUFF"
OUTPUT_FILE = "concat.txt"
HIERARCHY_FILE = "project-hierarchy.txt"
include_extensions = ['.js', '.json', '.py', '.env', '.yml', '.css', '.html', '.md']
exclude_extensions = [".mp4", ".jpg", ".jpeg", ".png"]
exclude_files = ["concat.txt", "concat.py", HIERARCHY_FILE, 'package-lock.json']
exclude_dirs = ["node_modules", "__pycache__", ".git", "backend"]

def find_hierarchy_file(root):
    for subdir, dirs, files in os.walk(root):
        if HIERARCHY_FILE in files:
            return os.path.join(subdir, HIERARCHY_FILE)
    return None

def concatenate_files(root, output):
    with open(output, "w", encoding="utf-8") as outfile:
        hierarchy_path = find_hierarchy_file(root)
        if hierarchy_path:
            print(f"Writing {HIERARCHY_FILE} to output")
            try:
                with open(hierarchy_path, "r", encoding="utf-8") as hiefile:
                    outfile.write(f"----- Start of {HIERARCHY_FILE} -----\n")
                    outfile.write(hiefile.read())
                    outfile.write(f"\n----- End of {HIERARCHY_FILE} -----\n\n")
            except Exception as e:
                print(f"Failed to read {HIERARCHY_FILE}: {e}")
        else:
            print(f"{HIERARCHY_FILE} not found")

        for subdir, dirs, files in os.walk(root):
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            print(f"Traversing directory: {subdir}")

            for file in files:
                file_path = os.path.join(subdir, file)

                if file in exclude_files or any(file.endswith(ext) for ext in exclude_extensions):
                    print(f"Skipping file: {file_path}")
                    continue

                if any(file.endswith(ext) for ext in include_extensions):
                    print(f"Including file: {file_path}")
                    try:
                        with open(file_path, "r", encoding="utf-8") as infile:
                            outfile.write(f"----- Start of {file_path} -----\n")
                            outfile.write(infile.read())
                            outfile.write(f"\n----- End of {file_path} -----\n\n")
                    except Exception as e:
                        print(f"Failed to read file: {file_path}, error: {e}")

    print(f"Finished traversing.")

concatenate_files(ROOT_DIR, OUTPUT_FILE)

print(f"Script completed.")