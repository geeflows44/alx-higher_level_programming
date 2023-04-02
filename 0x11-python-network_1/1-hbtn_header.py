#!/usr/bin/python3
"""Script that takes in a URL, sends a request to the URL and
- displays the value of X-Request-Id
"""

import sys
import urllib.request

if __name__ == "__main__":
    url = sys.argv[1]
    response = urllib.request.Request(url)

    with urllib.request.urlopen(response) as res:
        print(dict(res.headers).get("X-Request-ID"))
