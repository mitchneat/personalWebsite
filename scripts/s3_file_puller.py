import boto3
import json

# Define the base bucket and folder
base_bucket_name = "mitch-neat-website-data"
folder_name = "ElectricalForecast/"  # Include the trailing slash # WHAT TO CHANEG ----------------------

# Configure AWS S3 client
s3 = boto3.client("s3")

# List objects within the specified folder
response = s3.list_objects_v2(Bucket=base_bucket_name, Prefix=folder_name)

# Extract file URLs
base_url = f"https://{base_bucket_name}.s3.amazonaws.com/"
file_urls = [{"url": base_url + obj["Key"]} for obj in response.get("Contents", [])]

# Define the output filename dynamically
output_filename = f"./src/assets/Media/{folder_name.strip('/')}.json"

# Save to JSON file
with open(output_filename, "w") as f:
    json.dump(file_urls, f, indent=2)

print(f"URLs saved to {output_filename}")
