# AWS Setup Guide

## 1. S3 Bucket for Photos

```bash
# Create bucket
aws s3 mb s3://YOUR-PHOTO-BUCKET-NAME --region us-east-1

# Enable public access (CloudFront will serve, but bucket policy needed)
aws s3api put-public-access-block \
  --bucket YOUR-PHOTO-BUCKET-NAME \
  --public-access-block-configuration \
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=false,RestrictPublicBuckets=false
```

### CORS Configuration

Create `cors.json`:
```json
{
  "CORSRules": [
    {
      "AllowedHeaders": ["*"],
      "AllowedMethods": ["GET"],
      "AllowedOrigins": ["*"],
      "MaxAgeSeconds": 3600
    }
  ]
}
```

```bash
aws s3api put-bucket-cors --bucket YOUR-PHOTO-BUCKET-NAME --cors-configuration file://cors.json
```

### Upload Photos

```bash
aws s3 sync ./photos/ s3://YOUR-PHOTO-BUCKET-NAME/ --acl private
```

## 2. CloudFront Distribution

1. Go to **CloudFront** in the AWS Console
2. Create Distribution:
   - **Origin domain**: Select your S3 bucket
   - **Origin access**: Origin Access Control (OAC) — create new
   - **Viewer protocol policy**: Redirect HTTP to HTTPS
   - **Cache policy**: CachingOptimized
   - **Price class**: Use only North America and Europe (or all edge locations)
3. After creation, copy the **Distribution domain name** (e.g., `d1234abcdef.cloudfront.net`)
4. Update the S3 bucket policy with the one CloudFront provides (allows CloudFront to read from S3)

### Update the Code

Replace the placeholder URLs in `src/data/photos.ts` with your CloudFront domain:
```typescript
src: "https://d1234abcdef.cloudfront.net/photo-01.jpg"
```

Optionally update `next.config.ts` to use your specific CloudFront hostname:
```typescript
hostname: "d1234abcdef.cloudfront.net"
```

## 3. AWS Amplify Deployment

1. Go to **AWS Amplify** in the console
2. Click **New app** → **Host web app**
3. Connect your **GitHub** repository
4. Amplify will auto-detect Next.js — use these build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

5. Deploy!

## 4. Custom Domain

1. In the Amplify app, go to **Domain management**
2. Click **Add domain**
3. Enter your domain name
4. Amplify will provide DNS records (CNAME) to add to your domain registrar
5. If using Route 53, Amplify can configure it automatically
6. SSL certificate is provisioned automatically by Amplify

## Quick Reference

| Resource | Purpose |
|----------|---------|
| S3 bucket | Photo storage |
| CloudFront | CDN for serving photos globally |
| Amplify | Hosting the Next.js static site |
| Route 53 (optional) | DNS management |
