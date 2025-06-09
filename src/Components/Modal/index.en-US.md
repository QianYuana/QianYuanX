---
toc: content
order: 1
group:
  title: Components
---

# ModalList

## introduce

Inject the form component into the modal. During use, please note that the render component is a controlled component. If default values are required, please set them in the initialValues section

## code demo

### Basic usage

```jsx
import { ModalList } from 'qianyuanx';
import { Collapse, Form, Button, message, Input } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const onFinish = (values) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setopen(false);
    }, 1000);
  };
  const modalCols = (modalKey) => {
    return [
      {
        title: 'Custom Title',
        layout: 'horizontal',
        initialValues: { licenseCode: 'Set default value' },
        listData: [
          {
            label: 'Custom Name',
            name: 'licenseCode',
            render: (
              <Input placeholder="Insert the component to be placed (controlled component)" />
            ),
          },
          {
            label: 'Custom Name',
            name: 'time',
            render: (
              <Input placeholder="Insert the component to be placed (controlled component)" />
            ),
          },
        ],
      },
    ][modalKey];
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => setopen(true)}
        style={{ marginBottom: '20px' }}
      >
        open a dialog box
      </Button>
      <ModalList
        open={open}
        data={modalCols(0)}
        onFinish={onFinish}
        loading={loading}
        onCancel={() => setopen(false)}
      />
    </>
  );
};
```

### Rule validation

```jsx
import { ModalList } from 'qianyuanx';
import { Button, Input } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const onFinish = (values) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setopen(false);
    }, 1000);
  };
  const modalCols = (modalKey) => {
    return [
      {
        title: 'Custom Title',
        layout: 'horizontal',
        initialValues: { licenseCode: 'Set default value' },
        listData: [
          {
            label: 'Custom Name',
            name: 'licenseCode',
            rules: [
              {
                required: true,
                message: 'Cannot be empty',
              },
            ],
            render: (
              <Input placeholder="Insert the component to be placed (controlled component)" />
            ),
          },
          {
            label: 'Custom Name',
            name: 'time',
            rules: [
              {
                required: true,
                message: 'Cannot be empty',
              },
            ],
            render: (
              <Input placeholder="Insert the component to be placed (controlled component)" />
            ),
          },
        ],
      },
    ][modalKey];
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => setopen(true)}
        style={{ marginBottom: '20px' }}
      >
        open a dialog box
      </Button>
      <ModalList
        open={open}
        data={modalCols(0)}
        onFinish={onFinish}
        loading={loading}
        onCancel={() => setopen(false)}
      />
    </>
  );
};
```

### multiline

```jsx
import { ModalList } from 'qianyuanx';
import { Button, Input } from 'antd';
import React, { useState } from 'react';
const { TextArea } = Input;

const TextAreas = (props) => {
  return (
    <>
      <p style={{ marginBottom: 10 }}>
        Enter box codes. Multiple entries are supported with new lines or comma
        separations.
      </p>
      <TextArea
        style={{
          resize: 'none',
        }}
        autoSize={{
          minRows: 4,
        }}
        rows={4}
        placeholder="Please enter box codes"
        onChange={(values) => props.onChange(values)}
      />
    </>
  );
};

const App = () => {
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const onFinish = (values) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setopen(false);
    }, 1000);
  };
  const modalCols = (modalKey) => {
    return [
      {
        title: 'Multi-line text',
        layout: 'horizontal',
        width: 245,
        listData: [
          {
            label: null,
            name: 'licenseCodes',
            rules: [
              {
                required: true,
                message: 'Box codes cannot be empty',
              },
            ],
            render: <TextAreas></TextAreas>,
          },
        ],
      },
    ][modalKey];
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => setopen(true)}
        style={{ marginBottom: '20px' }}
      >
        open a dialog box
      </Button>
      <ModalList
        open={open}
        data={modalCols(0)}
        onFinish={onFinish}
        loading={loading}
        onCancel={() => setopen(false)}
      />
    </>
  );
};
export default App;
```

## API

| Parameter |                Description                 |    Type     | Default Value |
| :-------: | :----------------------------------------: | :---------: | :-----------: |
|   open    |       Whether the dialog is visible        |   boolean   |       -       |
|   data    |                 Form data                  |   Object    |       -       |
| onFinish  |   Callback when the OK button is clicked   | function(e) |       -       |
| onCancel  | Callback when the Cancel button is clicked | function(e) |       -       |
|  loading  |               Loading status               |   boolean   |     false     |

## Data

|    Parameter    |                                         Description                                          |   Type    | Default Value |
| :-------------: | :------------------------------------------------------------------------------------------: | :-------: | :-----------: |
|      title      |                                            Title                                             |  string   |       -       |
|     layout      | Layout mode, horizontal: horizontal layout, vertical: vertical layout, inline: inline layout |  string   |  horizontal   |
|  initialValues  |                                     Initial form values                                      |  Object   |       -       |
|    listData     |                                          Form data                                           |   Array   |       -       |
| listData.label  |                                          Form title                                          |  string   |       -       |
|  listData.name  |                                          Form name                                           |  string   |       -       |
| listData.render |                                        Form component                                        | ReactNode |       -       |
| listData.rules  |                                    Form validation rules                                     |   Array   |       -       |

## Notes

- It's a controlled component, if you want to set a default value, please set it in initialValues.
- For detailed parameters, please refer to [antd form component](https://4x-ant-design.antgroup.com/components/form-cn/#API)

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
