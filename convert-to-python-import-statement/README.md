# Convert to Python import statement

Takes the string from the clipboard as input and converts it into a Python import statement

For example:
```
rule_engine.models.model_name.SomeModel
```

Will get converted into:
```
from rule_engine.models.model_name import SomeModel
```
