# concatenate_files.py
# This script concatenates the contents of all project files, excluding specific file types and specific files,
# into a single text file.

import os

# Define the root directory of your project
root_dir = 'TUFF'

# Define the output file
output_file = 'concat.txt'

# List of file extensions to include
include_extensions = ['.js', '.json', '.py', '.env', '.yml', '.css', '.html', '.md']

# List of file extensions to exclude
exclude_extensions = ['.mp4', '.jpg', '.jpeg', '.png']

# List of specific files to exclude
exclude_files = ['concat.txt', 'concatenate_files.py']

# Function to concatenate files
def concatenate_files(root, output):
    with open(output, 'w', encoding='utf-8') as outfile:
        for subdir, _, files in os.walk(root):
            # Exclude node_modules directories
            if 'node_modules' in subdir.split(os.sep):
                print(f"Skipping node_modules directory: {subdir}")
                continue

            print(f"Traversing directory: {subdir}")
            for file in files:
                file_path = os.path.join(subdir, file)
                print(f"Checking file: {file_path}")
                if file in exclude_files:
                    print(f"Skipping excluded file: {file_path}")
                    continue
                if any(file.endswith(ext) for ext in exclude_extensions):
                    print(f"Skipping excluded extension file: {file_path}")
                    continue
                if any(file.endswith(ext) for ext in include_extensions):
                    print(f"Including file: {file_path}")
                    try:
                        with open(file_path, 'r', encoding='utf-8') as infile:
                            outfile.write(f"----- Start of {file_path} -----\n")
                            outfile.write(infile.read())
                            outfile.write(f"\n----- End of {file_path} -----\n\n")
                    except Exception as e:
                        print(f"Failed to read file: {file_path}, error: {e}")
                else:
                    print(f"File {file_path} does not match any include extensions")

# Run the function
concatenate_files(root_dir, output_file)

print(f"Files concatenated into {output_file}")
