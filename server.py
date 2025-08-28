from http.server import HTTPServer, SimpleHTTPRequestHandler

server = HTTPServer(('0.0.0.0', 6666), SimpleHTTPRequestHandler)
print('Server running on port 6666...')
server.serve_forever()