# markdowns

## 소개

markdown 파일 저장소로서, `tester`, `manifest-generator` 등을 통한 markdown 포맷의 test report, release note 등이 저장되며, `markdown viewer` 등을 통해 조회가 가능하도록 합니다.

## Directory structure

```
services
├── public-apigw # app name
│  ├── test-report    # test report
│  │  ├── ...
│  │  ├── kic-qa-2023-01-31-123.md
│  │  ├── kic-qa-2023-01-31-124.md
│  │  └── ...
│  ├── release-note    # release note
│  │  ├── ...
│  │  ├── latest.md
│  │  ├── 0.27.0.md
│  │  ├── 0.28.0.md
│  │  └── ...
```