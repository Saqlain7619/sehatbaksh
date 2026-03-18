import http.server
import socketserver
import socket
import webbrowser
from pathlib import Path

# Get the current directory
current_dir = Path(__file__).parent.absolute()

# Set the port
PORT = 9090  # Changed from 8000 to 9090

# Get local IP address for accessing from other devices
def get_local_ip():
    try:
        # Create a socket to determine the local IP
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))  # Google's DNS server
        local_ip = s.getsockname()[0]
        s.close()
        return local_ip
    except Exception:
        return "127.0.0.1"  # Fallback to localhost

# Set up the server
Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)

# Get the local IP address
local_ip = get_local_ip()

print(f"\n{'='*60}")
print(f"Starting server at port {PORT}")
print(f"{'='*60}")
print(f"\nLocal access (this computer):")
print(f"http://localhost:{PORT}")
print(f"http://127.0.0.1:{PORT}")
print(f"\nNetwork access (other devices on same network):")
print(f"http://{local_ip}:{PORT}")
print(f"\nTo test on mobile devices, connect to the same WiFi network")
print(f"and enter the Network access URL in your mobile browser.")
print(f"\nPress Ctrl+C to stop the server.")
print(f"{'='*60}\n")

# Open the default browser
webbrowser.open(f"http://localhost:{PORT}")

# Start the server
try:
    httpd.serve_forever()
except KeyboardInterrupt:
    print("\nShutting down the server...")
    httpd.server_close()
    print("Server stopped.")
