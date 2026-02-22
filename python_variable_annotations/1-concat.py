#!/usr/bin/env python3

"""1. Basic annotations - concat"""


def concat(str1: str, str2: str) -> str:

    """concat two strings"""
    return str1 + str2

str1 = "egg"
str2 = "salad"
def concat(str1: str, str2: str) -> str:
    """Return the concatenation of two string values."""
    return str1 + str2

print(concat(str1, str2) == "{}{}".format(str1, str2))
print(concat.__annotations__)
