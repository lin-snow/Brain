# Python

## 虚拟环境

### **1. 使用 Python 创建虚拟环境**

Python 自带虚拟环境工具 `venv`，适合轻量化需求。

#### **创建虚拟环境**

1. 在你的项目文件夹中运行：

   ```bash
   python -m venv myenv
   ```

   - `myenv` 是虚拟环境的名称，可以随意更改。

2. **目录结构**： 创建完成后，`myenv` 文件夹中会包含独立的 Python 解释器和依赖。

#### **激活虚拟环境**

- Windows：

  ```bash
  myenv\Scripts\activate
  ```

- macOS/Linux：

  ```bash
  source myenv/bin/activate
  ```

1. 激活后，你会看到命令行前面有 `(myenv)` 提示，说明虚拟环境已激活。

#### **安装依赖**

激活虚拟环境后，使用 `pip` 安装依赖包：

```bash
pip install requests
```

#### **退出虚拟环境**

当完成工作后，退出虚拟环境：

```bash
deactivate
```

------

### **2. 使用 Conda 创建虚拟环境**

Conda 是 Anaconda 和 Miniconda 自带的环境管理工具，适合科学计算和数据科学需求。

#### **创建虚拟环境**

1. 创建环境时可以指定 Python 版本：

   ```bash
   conda create --name myenv python=3.10
   ```

   - `myenv` 是环境名称。
   - 如果不指定版本，将默认安装 Anaconda 自带的 Python 版本。

2. Conda 会自动解析依赖并安装相关包。

#### **激活虚拟环境**

运行：

```bash
conda activate myenv
```

1. 激活后，命令行前面会显示 `(myenv)`，表示当前虚拟环境。

#### **安装依赖**

在 Conda 虚拟环境中，可以使用：

- Conda 安装：

  ```bash
  conda install numpy pandas
  ```

- Pip 安装

  （适用于未收录在 Conda 中的包）：

  ```bash
  pip install package_name
  ```

#### **退出虚拟环境**

运行：

```bash
conda deactivate
```

------

### **3. 虚拟环境管理推荐**

- **推荐工具**：

  - 标准 Python 项目：使用 `venv` 搭配 `pip`。
  - 数据科学项目：使用 Conda。
  - 如果希望兼容两者，使用 `Miniconda` 是折中的选择。

- **导出和恢复环境**：

  1. **导出依赖**：

     - Python `venv`:

       ```bash
       pip freeze > requirements.txt
       ```

     - Conda：

       ```bash
       conda env export > environment.yml
       ```

  2. **恢复环境**：

     - Python `venv`:

       ```bash
       pip install -r requirements.txt
       ```

     - Conda：

       ```bash
       conda env create -f environment.yml
       ```