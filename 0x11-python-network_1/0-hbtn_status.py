#! /usr/bin/python3
""" Python script that uses the urllib package to
- retrieve data from https://alx-intranet.hbtn.io/status
"""

if __name__ == "__main__":
    import urllib.request

    with urllib.request.urlopen('https://alx-intranet.hbtn.io/status') as page:
        response = page.read()
        print("Body response:")
        print(f"\t- type: {type(response)}")
        print(f"\t- content: {response}")
        print(f"\t- utf8 content: {response.decode('utf-8')}")
